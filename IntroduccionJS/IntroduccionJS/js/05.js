//Template Strings y Concatenacion

const product = "Tablet de 12 pulgadas";
const precio = 400;
const marca = "Orange";

// Ejemplo de concatenacion
console.log("-----Concatenacion-----");
console.log(`El Producto es:` + product);
console.log(product + ` $` + precio + ` Dolares, marca:  ` + marca);

// Ejemplo Temlplate
console.log("-----Template-----");
console.log(`El Producto es: ${product}`);
console.log(`${product} $${precio} Dolares, marca: ${marca} `);
