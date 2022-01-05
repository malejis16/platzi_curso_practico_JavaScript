console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd;
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd;
console.group("Circulos");

function perimetroCirculo(radio) {
  return 2 * Math.PI * radio;
}

function areaCirculo(radio) {
  return radio * radio * Math.PI;
}

console.groupEnd;

var inputLado = document.getElementById("inputLadoCuadrado");
var inputBase = document.getElementById("inputBaseTriangulo");
var inputAltura = document.getElementById("inputAlturaTriangulo");
var inputLado1 = document.getElementById("inputLado1Triangulo");
var inputLado2 = document.getElementById("inputLado2Triangulo");
var inputBase = document.getElementById("inputBaseTriangulo");
var inputRadio = document.getElementById("inputRadioCirculo");
var inputRadio = document.getElementById("inputRadioCirculo");

function calcularPerimetroCuadrado() {
  alert(
    "El perimetro del cuadrado es: " +
      perimetroCuadrado(inputLado.value) +
      " y su area es de: " +
      areaCuadrado(inputLado.value)
  );
}

function calcularAreaCuadrado() {
  alert(areaCuadrado(inputLado.value));
}

function calcularAreaTriangulo() {
  alert(areaTriangulo(inputBase.value, inputAltura.value));
}

function calcularPerimetroTriangulo() {
  alert(
    perimetroTriangulo(
      Number.parseInt(inputLado1.value),
      Number.parseInt(inputLado2.value),
      Number.parseInt(inputBase.value)
    )
  );
}

function calcularPerimetroCirculo() {
  alert(perimetroCirculo(inputRadio.value));
}
function calcularAreaCirculo() {
  alert(areaCirculo(inputRadio.value));
}
