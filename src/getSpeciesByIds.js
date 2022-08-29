const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const actual = [];
  ids.forEach((id) => actual.push(species.find((specie) => specie.id === id)));
  return actual;
}

module.exports = getSpeciesByIds;

// Implemente a função getSpeciesByIds para buscar as espécies dos animais por meio de um ID e retorne um array contendo todos os animais dessa espécie.X

// Faça com que a função getSpeciesByIds possa receber vários parâmetros;X

// Retorne um array vazio se a função não receber um id;X

// Retorne as seguintes informações do arquivo data:X

// Se a função receber apenas um id, retorne a espécie do animal referente a este id;X

// Se a função receber vários ids, retorne todas as espécies referente a esses ids.X

// O que será testado:

// A função getSpeciesByIds, caso não receba nenhum parâmetro, deve retornar um array vazio;

// A função getSpeciesByIds, caso receba como parâmetro um único ID, deve retornar um array com a espécie referente a esse ID;

// A função getSpeciesByIds, caso receba mais de um ID, deve retornar um array com as espécies referentes aos IDs.
