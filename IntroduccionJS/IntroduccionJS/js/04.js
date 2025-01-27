//Objetos(arreglo)- Destructuring de dos o mas objetos
const product = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

const cliente = {
  nombre: "Juan",
  premium: true,
};

const carrito = {
  cantidad: 1,
  cliente,
  ...product, //spread operator
};

console.log("---Agregando objeto y agregando variables del objeto---");
console.log(carrito);

const nuevoObjeto = {
  ...product,
  ...cliente,
};
console.log("---Agregando variables de objeto a otro");
console.log(nuevoObjeto);
const nuevoObjeto2 = Object.assign(product, cliente);
console.log("---Forma mas sensilla de agregar");
console.log(nuevoObjeto2);
