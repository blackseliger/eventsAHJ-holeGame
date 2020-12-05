/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import { deactivateHole, activateHole } from '../activateHole';

describe('check work deactivateHole', () => {
  test('should remove class', () => {
    document.body.innerHTML = `
    <div class="hole-game">
        <div class="hole hole_has_gnome" id="hole1"></div>
        <div class="hole" id="hole2"></div>
    </div>`;

    const hole = [...document.querySelectorAll('.hole')];
    deactivateHole(hole, 0);
    const received = hole[0].classList.contains('hole_has_gnome');
    expect(received).toEqual(false);
  });
});

describe('check work activateHole', () => {
  test('should add class', () => {
    document.body.innerHTML = `
    <div class="hole-game">
        <div class="hole" id="hole1"></div>
        <div class="hole" id="hole2"></div>
    </div>`;
    const hole = [...document.querySelectorAll('.hole')];
    activateHole(hole, 0);
    const received = hole[0].classList.contains('hole_has_gnome');
    expect(received).toEqual(true);
  });
});
