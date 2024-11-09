const { registrar, leer } = require('./operaciones');

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === 'registrar') {
  const [nombre, edad, animal, color, enfermedad] = args.slice(1);

  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log("Error: Faltan datos. Uso:");
    console.log("node index.js registrar [nombre] [edad] [animal] [color] [enfermedad]");
    return;
  }

  if (isNaN(edad)) {
    console.log("Error: La edad debe ser un número");
    return;
  }

  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
  leer();
} else {
  console.log("Operación no válida. Uso:");
  console.log("- Para registrar: node index.js registrar [nombre] [edad] [animal] [color] [enfermedad]");
  console.log("- Para leer: node index.js leer");
}