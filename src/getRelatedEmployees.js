const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const empregado = employees.find((employed) => employed.managers.includes(id));
  if (empregado !== undefined) {
    return true;
  } return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const colaborador = employees.filter((employed) => employed.managers.includes(managerId));
    return colaborador.map((colab) => `${colab.firstName} ${colab.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
