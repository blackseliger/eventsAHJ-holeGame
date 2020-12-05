/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import reset from '../reset';

describe('check work reset', () => {
  test('should reset lost and dead to default parameters', () => {
    let received = false;
    document.body.innerHTML = `<div id="status" class="status">
    Убито гоблинов: <span class="dead">0</span><br>
    Промахов: <span class="lost">0</span><br>
</div>`;
    const dead = document.querySelector('.dead');
    const lost = document.querySelector('.lost');
    reset(lost, dead);
    if (lost.innerText === 0 && dead.innerText === 0) {
      received = true;
    }
    expect(received).toEqual(true);
  });
});
