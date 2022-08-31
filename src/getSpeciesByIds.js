const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const actual = [];
  ids.forEach((id) => actual.push(species.find((specie) => specie.id === id)));
  return actual;
}

module.exports = getSpeciesByIds;
