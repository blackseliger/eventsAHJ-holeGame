/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import { deactivateHole, activateHole, hole } from '../activateHole';

describe('check work deactivateHole', () => {
  test('should remove class', () => {
    // const hole = [...document.querySelectorAll('.hole')];
    deactivateHole(0);
    const received = hole[0].classList.contains('hole_has_gnome');
    expect(received).toEqual(false);
  });
});

describe('check work activateHole', () => {
  test('should add class', () => {
    // const hole = [...document.querySelectorAll('.hole')];
    activateHole(1);
    const received = hole[1].classList.contains('hole_has_gnome');
    expect(received).toEqual(true);
  });
});
