const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const totalAnimais = species.reduce((acc, animais) => {
      acc[animais.name] = animais.residents.length;
      return acc;
    }, {});
    return totalAnimais;
  }
  if (animal.specie && animal.sex) {
    return species.find((animales) => animales.name === animal.specie).residents
      .filter((animales) => animales.sex === animal.sex).length;
  }
  if (animal.specie) {
    return species.find((animales) => animales.name === animal.specie).residents.length;
  }
}

module.exports = countAnimals;
