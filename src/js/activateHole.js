const deactivateHole = (array, index) => {
  array[index].classList.remove('hole_has_gnome');
};
const activateHole = (array, index) => {
  array[index].classList.add('hole_has_gnome');
};

const getHole = (index) => document.getElementById(`hole${index}`);

export {
  activateHole, deactivateHole, getHole,
};
