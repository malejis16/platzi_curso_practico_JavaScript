var precio = document.getElementById("inputPrice");
var descuento = document.getElementById("inputDiscount");

function calcularPrecioConDescuento(precio, descuento) {
  const precioConDescuento = (precio * (100 - descuento)) / 100;
  return precioConDescuento;
}

function buttonPriceDiscount() {
  const precioFinal = calcularPrecioConDescuento(precio.value, descuento.value);
  const resultP = document.getElementById("resultPrice");
  resultP.innerText = "El precio con descuento son $" + precioFinal;
}
