const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colaborador = employees.find((colab) => colab.id === id);
  const maisVelho = species.find((specie) => specie.id === colaborador.responsibleFor[0]).residents
    .sort((animalA, animalB) => animalB.age - animalA.age)[0];
  return Object.values(maisVelho);
}

module.exports = getOldestFromFirstSpecies;
