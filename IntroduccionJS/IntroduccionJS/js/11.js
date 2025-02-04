// Funtion declaration

console.log("--Funcion sin parametro---");
function imprimir() {
  console.log(1 + 1);
}
imprimir();

console.log("--Funcion con parametro---");
function sumar(numero1, numero2) {
  console.log(numero1 + numero2);
}
sumar(10, 20);

console.log("---Funcion con parametro por default---");
function sumar_default(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
}
sumar_default(10);
