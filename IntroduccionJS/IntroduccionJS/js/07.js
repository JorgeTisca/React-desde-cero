// Arrays
const tecnologias = ["HTML", "CSS", "JavaSript", "React.js", "Node.js"];
// tecnologias[5] = "Next.js";
console.table(tecnologias);
console.log("Agregar dato en posicion");
const nuevoArreglo = ["Nest.js", ...tecnologias];
console.table(nuevoArreglo);

// Eliminar primer elemento
tecnologias.shift();
console.table(tecnologias);

//Usando filtro
console.log("Usando filtro");
const tecnologias2 = tecnologias.filter(function (teach) {
  console.log(teach);
  if (teach === "CSS") {
    return teach;
  }
});
console.log(tecnologias2);

//Usando map  iterar elementos de un arreglo
console.log("Usando map");
const tecnologias3 = tecnologias.filter(function (teach) {
  console.log(teach);
  if (teach === "React.js") {
    return "Python";
  } else {
    return teach;
  }
});
console.log(tecnologias3);
