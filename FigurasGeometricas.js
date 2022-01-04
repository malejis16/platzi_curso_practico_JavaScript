/*
CUADRADO
perimetro: borde del cuadrado, cúanto mide? se suman los lados 4xL. 
area del cuadrado: L al cuadrado
*/

/*
TRIANGULO
perimetro: L1+L2+L3
area: (B*A)/ 2
*/

/*
CIRCULO
radio: r
diametro: 2*r
perimetro: 2(pi)*r
area: r*r*pi 
*/

console.group("Cuadrados");

var lado = 6;
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}
console.log(
  "El perimetro del cuadrado es: " +
    perimetroCuadrado(lado) +
    " y su area es de: " +
    areaCuadrado(lado)
);

console.groupEnd;

console.group("Triangulos");

var lado1 = 5;
var lado2 = 8;
var base = 10;
var altura = 11;

function perimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log(
  "El perimetro del triángulo es: " +
    perimetroTriangulo(lado1, lado2, base) +
    " y su area es de: " +
    areaTriangulo(base, altura)
);

console.groupEnd;

console.group("Circulos");

var radio = 5;

function perimetroCirculo(radio) {
  return 2 * Math.PI * radio;
}

function areaCirculo(radio) {
  return radio * radio * Math.PI;
}

console.log(
  "El perimetro del Círculo es: " +
    perimetroCirculo(radio) +
    " y su area es de: " +
    areaCirculo(radio)
);

console.groupEnd;
