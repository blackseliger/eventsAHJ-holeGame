/* eslint-disable no-unused-vars */
const dead = document.querySelector('.dead');
const lost = document.querySelector('.lost');

// eslint-disable-next-line func-names
const reset = function () {
  lost.innerText = 0;
  dead.innerText = 0;
  return null;
};

export { reset, dead, lost };
