const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const actual = species.find((specie) => specie.name === animal);
  const { residents } = actual;
  const checkResidents = residents.filter((resident) => resident.age >= age);
  if (checkResidents.length === residents.length) return true;
  return false;
}

module.exports = getAnimalsOlderThan;
