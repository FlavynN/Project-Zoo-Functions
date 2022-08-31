const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName !== 'string') {
    return {};
  }
  return employees.find((employed) => employed.firstName === employeeName
  || employed.lastName === employeeName);
}

module.exports = getEmployeeByName;
