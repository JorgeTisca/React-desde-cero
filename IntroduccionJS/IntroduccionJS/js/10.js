const tecnologias = ["HTML", "CSS", "JavaSript", "React.js", "Node.js"];
//ForEach
console.log("Usando iterador ForEach");
tecnologias.forEach(function (teach) {
  console.log(teach);
});

// Map --crea un nuevo arreglo a diferencia de forEach
const arrayMap = tecnologias.map(function (tech) {
  return tech;
});

console.log("------Usando Map--------");
console.log(arrayMap);
