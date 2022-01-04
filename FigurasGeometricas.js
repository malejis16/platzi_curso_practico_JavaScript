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

var lado = 6;
function perimetroCuadrado(lado) {
  return lado * 4;
}

function perimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function areaTriangulo(Base, Altura) {
  return (Base * Altura) / 2;
}

function perimetroCirculo(Radio) {
  return 2 * Math.PI * Radio;
}

function areaCirculo(Radio) {
  return Radio * Radio * Math.PI;
}

/*
CIRCULO
radio: r
diametro: 2*r
perimetro: 2(pi)*r
area: r*r*pi 
*/
