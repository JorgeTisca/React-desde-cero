//Objetos
const product = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

console.log("-----Uso de objecto-------");
console.log(product);
console.log(product.nombre);

//Destructurig -forma moderna de extraer variables
console.log("-------Uso de Destructuring-------");
const { nombre, disponible, precio } = product;
console.log(nombre);
console.log(disponible);
console.log(precio);

// Object Literal Enhacement
console.log("-------Uso de Objet Literal Enhacement-------");
const autenticado = true;
const usuario = "Juan";
const nuevoObjeto = {
  autenticado: autenticado,
  usuario: usuario,
};
console.log(nuevoObjeto);
