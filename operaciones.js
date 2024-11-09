const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };

  citas.push(nuevaCita);

  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));

  console.log('Cita registrada con éxito');
};

const leer = () => {
  try {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    if (citas.length === 0) {
      console.log('No hay citas registradas');
    } else {
      console.log('Citas registradas:');
      citas.forEach((cita, index) => {
        console.log(`\nCita #${index + 1}:`);
        console.log(`- Nombre: ${cita.nombre}`);
        console.log(`- Edad: ${cita.edad}`);
        console.log(`- Animal: ${cita.animal}`);
        console.log(`- Color: ${cita.color}`);
        console.log(`- Enfermedad: ${cita.enfermedad}`);
      });
    }
  } catch (error) {
    console.log('Error al leer el archivo:', error.message);
  }
};

module.exports = {
  registrar,
  leer
};