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

// Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie  possuem essa idade ou são mais velhos. X

// Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima: X

// Os animais devem ter essa idade ou serem mais velhos.X
// Retorne um valor booleano. X

// O que será testado:

// A função, ao receber uma espécie e uma idade como parâmetros, deve testar se todos os animais desta espécie possuem a idade mínima especificada. X
