/* eslint-disable linebreak-style */
const startGame = document.querySelector('.start_game');
const stopGame = document.querySelector('.stop_game');
const hole = [...document.querySelectorAll('.hole')];

let playing = false;

startGame.addEventListener('click', () => {
  playing = true;
  let activeHole = 0;
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
  }, 500);

  next();
});

stopGame.addEventListener('click', () => {
  playing = false;
});
