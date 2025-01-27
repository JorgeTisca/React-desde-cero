//Objetos(arreglo) Manipulacion
const product = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

// El object.freeze nos permite no modificar ni agregar cosas a nuestro arreglo
// Object.freeze(product)

// Object.seal solo permite modificar pero no agregar
// Object.seal(product)

// Reescribir valor
product.disponible = true;

// Sino existe, lo agrega
product.imagen = "image.jpg";

// Eliminar propiedad
delete product.precio;

console.log(product);
