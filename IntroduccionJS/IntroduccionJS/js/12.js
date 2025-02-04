// Funciones - Function Expression
// La diferencia es la forma de declarar la funcion ya que
// esta se declara y se tiene que ejecutar despues, no como la anterior
const sumar = function sumar_default(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
};

sumar(10, 20);
