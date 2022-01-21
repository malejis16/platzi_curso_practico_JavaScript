let colombia = require("./salarios.js");

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, valorActual) {
    return (valorAcumulado += valorActual);
  });
  return sumaLista / lista.length;
}

const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

const salariosColOrdenados = salariosCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

function calcularMediana(lista) {
  const mitadElemento = parseInt(lista.length / 2);
  if (lista.length % 2 === 0) {
    const elemento1 = lista[mitadElemento - 1];
    const elemento2 = lista[mitadElemento];
    return calcularMediaAritmetica([elemento1, elemento2]);
  } else {
    return lista[mitadElemento];
  }
}

const medianaGeneralCol = calcularMediana(salariosColOrdenados);
// Calculando la mediana el Top 10 de salarios

//console.log(salariosColOrdenados.length);
const spliceStart = (salariosColOrdenados.length * 90) / 100;
//console.log(spliceStart);
const spliceCount = salariosColOrdenados.length - spliceStart;
//console.log(spliceCount);
const salariosColTop10 = salariosColOrdenados.splice(spliceStart, spliceCount);

const medianaTop10Col = calcularMediana(salariosColTop10);
console.log(medianaTop10Col);
