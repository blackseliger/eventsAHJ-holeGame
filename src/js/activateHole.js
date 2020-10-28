const hole = [...document.querySelectorAll('.hole')];

const deactivateHole = (index) => {
  hole[index].classList.remove('hole_has_gnome');
};
const activateHole = (index) => {
  hole[index].classList.add('hole_has_gnome');
};

const getHole = (index) => document.getElementById(`hole${index}`);

export {
  activateHole, deactivateHole, getHole, hole,
};
