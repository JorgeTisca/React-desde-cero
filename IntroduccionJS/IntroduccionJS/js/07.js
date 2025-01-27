// Arrays
const tecnologias = ["HTML", "CSS", "JavaSript", "React.js", "Node.js"];
// tecnologias[5] = "Next.js";
console.table(tecnologias);
console.log("Agregar dato en posicion");
const nuevoArreglo = ["Nest.js", ...tecnologias];
console.table(nuevoArreglo);
