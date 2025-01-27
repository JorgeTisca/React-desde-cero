//Objetos(arreglo)- Destructuring de dos o mas objetos
const product = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

const cliente = {
  nombre: "Juan",
  premium: true,
  direccion: {
    calle: "Calle México",
  },
};

const { nombre } = product;

// para declarar variable si se tiene el mismo nombre y ademas acceder
// al valor de un objeto dentro de otro objeto
const {
  nombre: nombreCliente,
  direccion: { calle },
} = cliente;

console.log(nombre);
console.log(nombreCliente);
console.log(calle);
