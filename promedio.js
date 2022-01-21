const lista1 = [100, 200, 300, 500, 700];

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
console.log(calcularMediaAritmetica([100, 200, 300]));
