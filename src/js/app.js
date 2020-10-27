/* eslint-disable linebreak-style */
const startGame = document.querySelector('.start_game');
const stopGame = document.querySelector('.stop_game');
const hole = [...document.querySelectorAll('.hole')];
const dead = document.querySelector('.dead');
const lost = document.querySelector('.lost');

let playing = false;
let activeHole = 0;

startGame.addEventListener('click', () => {
  playing = true;
  const getHole = (index) => document.getElementById(`hole${index}`);
  const deactivateHole = (index) => {
    hole[index].classList.remove('hole_has_gnome');
  };
  const activateHole = (index) => {
    hole[index].classList.add('hole_has_gnome');
  };

  const next = () => setTimeout(() => {
    if (!playing) return null;
    deactivateHole(activeHole);
    activeHole = Math.floor(Math.random() * hole.length);
    activateHole(activeHole);
    next();
    return null;
  }, 1000);

  next();

  const reset = function () {
    lost.innerText = 0;
    dead.innerText = 0;
  };

  for (let i = 1; i < 17; i += 1) {
    const clickedHole = getHole(i);
    clickedHole.addEventListener('click', (e) => {
      const clicked = e.currentTarget;
      if (clicked.classList.contains('hole_has_gnome') === true) {
        dead.innerText++;
      } else {
        lost.innerText++;
        if (lost.innerText > 5) {
          reset();
        }
      }
    });
  }
});

stopGame.addEventListener('click', () => {
  playing = false;
});
