const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const idades = entrants.reduce((acc, pessoa) => {
    if (pessoa.age > 0 && pessoa.age < 18) {
      acc.child += 1;
    } else if (pessoa.age >= 18 && pessoa.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    } return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return idades;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const objeto = Object.values(countEntrants(entrants));
  const valorCrianca = objeto[0] * prices.child;
  const valorAdulto = objeto[1] * prices.adult;
  const valorSenior = objeto[2] * prices.senior;
  return valorCrianca + valorAdulto + valorSenior;
}

module.exports = { calculateEntry, countEntrants };
