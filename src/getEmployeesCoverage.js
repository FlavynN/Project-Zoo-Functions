const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function notEmployee(employed) {
  const trabalhador = employees.find((employes) => employes.id === employed.id
    || employes.firstName === employed.firstName || employes.lastName === employed.lastName);
  if (!trabalhador) {
    throw new Error('Informações inválidas');
  }
}

const getAllEmployes = () => employees.map((employer) => ({
  id: employer.id,
  fullName: `${employer.firstName} ${employer.lastName}`,
  species: employer.responsibleFor.map((animais) => species
    .find((animal) => animal.id === animais).name),
  locations: employer.responsibleFor.map((animais) => species
    .find((local) => local.id === animais).location),
}));

const getEmployee = (employed) => employees.filter((one) => one.firstName === employed.name
  || one.lastName === employed.name || one.id === employed.id)
  .reduce((acc, curr) => {
    const oneEmployee = acc;
    acc.id = curr.id;
    acc.fullName = `${curr.firstName} ${curr.lastName}`;
    acc.species = species.filter((animals) => curr.responsibleFor.includes(animals.id))
      .map((nome) => nome.name);
    acc.locations = species.filter((animal) => curr.responsibleFor.includes(animal.id))
      .map((local) => local.location);

    return oneEmployee;
  }, {});

function getEmployeesCoverage(colaborador) {
  if (colaborador === undefined) {
    return getAllEmployes();
  }
  if (employees.some((verify) => verify.firstName === colaborador
    .name || verify.lastName === colaborador.name || verify.id === colaborador.id)) {
    return getEmployee(colaborador);
  }
  return notEmployee(colaborador);
}

module.exports = getEmployeesCoverage;
