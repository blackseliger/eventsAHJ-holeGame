/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { reset, dead, lost } from '../reset';


describe('check work reset', () => {
  test('should reset lost and dead to default parameters', () => {
    let received = false;

    reset();
    if (lost.innerText === 0 && dead.innerText === 0) {
      received = true;
    }
    expect(received).toEqual(true);
  });
});
