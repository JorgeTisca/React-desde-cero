// Funciones que retornan valores
const sumar = function (numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
};
function sumar_2(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}

const sumar_3 = (numero1 = 0, numero2 = 0) => numero1 + numero2;

console.log(sumar(10, 20));
console.log(sumar_2(20, 5));
console.log(sumar_3(5, 8));
