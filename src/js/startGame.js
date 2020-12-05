/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */

import { activateHole, deactivateHole, getHole } from './activateHole';
import reset from './reset';

const startGame = document.querySelector('.start_game');
const stopGame = document.querySelector('.stop_game');
const hole = [...document.querySelectorAll('.hole')];
const dead = document.querySelector('.dead');
const lost = document.querySelector('.lost');

let playing = false;
let activeHole = 0;

startGame.addEventListener('click', () => {
  playing = true;

  const next = () => setTimeout(() => {
    if (!playing) return null;
    deactivateHole(hole, activeHole);
    activeHole = Math.floor(Math.random() * hole.length);
    activateHole(hole, activeHole);
    next();
    return null;
  }, 1000);

  next();

  for (let i = 1; i < 17; i += 1) {
    const clickedHole = getHole(i);
    clickedHole.addEventListener('click', (e) => {
      const clicked = e.currentTarget;
      if (clicked.classList.contains('hole_has_gnome') === true) {
        dead.innerText++;
      } else {
        lost.innerText++;
        if (lost.innerText > 5) {
          reset(lost, dead);
        }
      }
    });
  }
});

stopGame.addEventListener('click', () => {
  playing = false;
});
