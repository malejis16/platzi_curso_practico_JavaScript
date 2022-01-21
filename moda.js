const lista = [
  100, 100, 100, 2, 500, 200, 300, 500, 700, 3, 3, 700, 700, 700, 700, 1,
];

function moda(lista) {
  const conteo = {};
  lista.map(function (valorActual) {
    if (conteo[valorActual]) {
      conteo[valorActual] += 1;
    } else {
      conteo[valorActual] = 1;
    }
  });
  console.log(conteo);

  const listaConteo = Object.entries(conteo).sort(function (
    valorAcumulado,
    valorActual
  ) {
    return valorAcumulado[1] - valorActual[1];
  });

  console.log(listaConteo[listaConteo.length - 1]);
  return listaConteo[listaConteo.length - (1)[0]];
}

console.log(moda(lista));
