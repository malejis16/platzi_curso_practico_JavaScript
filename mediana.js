const lista1 = [100, 1, 800, 550, 200, 300, 500, 40000000, 600, 800];

function calcularMediaAritmetica(lista) {
  /* let sumaLista = 0;
  for (i = 0; i < lista.length; i++) {
    sumaLista += lista[i];
  }*/
  const sumaLista = lista.reduce(function (valorAcumulado = 0, valorActual) {
    return (valorAcumulado += valorActual);
  });
  return sumaLista / lista.length;
}

function calcularMediana(lista) {
  //console.log(lista);
  lista.sort(function (a, b) {
    return a - b;
  });
  //console.log(lista);
  const mitadElemento = parseInt(lista.length / 2);
  if (lista.length % 2 === 0) {
    const elemento1 = lista[mitadElemento - 1];
    const elemento2 = lista[mitadElemento];
    return calcularMediaAritmetica([elemento1, elemento2]);
  } else {
    return lista[mitadElemento];
  }
}
console.log(calcularMediana(lista1));
