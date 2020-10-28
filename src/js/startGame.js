/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */

import {
  activateHole, deactivateHole, getHole, hole,
} from './activateHole';
import { reset, dead, lost } from './reset';

const startGame = document.querySelector('.start_game');
const stopGame = document.querySelector('.stop_game');

let playing = false;
let activeHole = 0;

startGame.addEventListener('click', () => {
  playing = true;

  const next = () => setTimeout(() => {
    if (!playing) return null;
    deactivateHole(activeHole);
    activeHole = Math.floor(Math.random() * hole.length);
    activateHole(activeHole);
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
          reset();
        }
      }
    });
  }
});

stopGame.addEventListener('click', () => {
  playing = false;
});





// Здравствуйте! Сделал все задание за исключением тестов, они постоянно проваливаются из-за 
//  "TypeError: Cannot read property 'classList' of undefined"  Но написано разве не верно в тестах?
// 