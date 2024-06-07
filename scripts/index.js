document.addEventListener('DOMContentLoaded', function() {
  let preDemo = document.getElementById('demo');
  
  let alumnosCreados = [];
  // Creamos 10 alumnos con datos aleatorios
  for (let i = 0; i < 10; i++) {
    let alumno = new Alumno({
      nombre: `Alumno ${i}`,
      apellido: `Apellido ${i}`,
      edad: Math.floor(Math.random() * 10) + 18,
      curso: `Curso ${i}`
    });

    alumno.guardar();
    preDemo.innerHTML += 'Alumno creado: \n'
    preDemo.innerHTML += JSON.stringify(alumno) + '\n';
    alumnosCreados.push(alumno);
  }

  // Buscamos un alumno por su id
  let alumno = Alumno.buscarPorId(alumnosCreados[0].id);
  preDemo.innerHTML += 'Alumno buscado por id: \n'
  preDemo.innerHTML += JSON.stringify(alumno) + '\n';

  // Modificamos un alumno
  alumno.nombre = 'Nuevo nombre';
  alumno.modificar();
  preDemo.innerHTML += 'Alumno modificado: \n'
  preDemo.innerHTML += JSON.stringify(alumno) + '\n';
  preDemo.innerHTML += JSON.stringify(Alumno.todos()) + '\n';

  // Eliminamos un alumno
  alumno.eliminar();
  preDemo.innerHTML += 'Alumno eliminado: \n'
  preDemo.innerHTML += JSON.stringify(alumno) + '\n';
  preDemo.innerHTML += JSON.stringify(Alumno.todos()) + '\n';
});