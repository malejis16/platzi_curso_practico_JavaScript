const lista1 = [
  100, 100, 100, 2, 500, 200, 300, 500, 700, 3, 3, 700, 700, 700, 700, 1,
];

const lista1Count = {};
lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

console.log(lista1Count);

const lista1Array = Object.entries(lista1Count).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[1];
});

console.log(lista1Array);

//const moda = lista1Array[lista1Array.length - 1];
