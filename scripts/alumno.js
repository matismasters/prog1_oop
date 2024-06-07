// Definimos la clase Alumno
class Alumno {
  constructor({ nombre, apellido, edad, curso, id = null }) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.curso = curso;
    this.errores = [];
  }

  anoNacimiento() {
    return new Date().getFullYear() - this.edad;
  }

  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }

  esMayorEdad() {
    return this.edad >= 18;
  }

  validar() {
    this.errores = [];

    if (!this.nombre || this.nombre === '') {
      this.errores.push('El nombre es obligatorio');
    }

    if (!this.apellido || this.apellido === '') {
      this.errores.push('El apellido es obligatorio');
    }

    if (!this.edad || isNaN(parseInt(this.edad))) {
      this.errores.push('La edad es obligatoria y tiene que ser un número');
    }

    if (!this.curso || this.curso === '') {
      this.errores.push('El curso es obligatorio');
    }
  }

  guardar() {
    this.validar();

    if (this.errores.length > 0) {
      console.log('No se puede guardar el alumno porque hay errores en los datos');
      console.log(JSON.stringify(this.errores));
      return this.errores;
    }

    if (this.id === null) {
      return this.crear()
    } else {
      return this.modificar();
    }
  }

  crear() {
    this.id = Alumno.siguienteId();

    let alumnos = Alumno.todos();
    alumnos.push(this);

    localStorage.setItem('alumnos', JSON.stringify(alumnos));

    return true;
  }

  modificar() {
    let alumnos = Alumno.todos();

    for (let i = 0; i < alumnos.length; i++) {
      if (alumnos[i].id === this.id) {
        alumnos[i] = this;
        break;
      }
    }

    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }

  eliminar() {
    let alumnos = Alumno.todos();
    let nuevosAlumnos = [];

    for (let alumno of alumnos) {
      if (alumno.id !== this.id) {
        nuevosAlumnos.push(alumno);
      }
    }

    localStorage.setItem('alumnos', JSON.stringify(nuevosAlumnos));
  }

  static buscarPorId(id) {
    let alumnos = this.todos();

    for (let alumno of alumnos) {
      if (alumno.id === id) {
        return alumno;
      }
    }

    return null;
  }

  static todos() {
    let datosAlumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    let alumnos = [];

    for (let datosAlumno of datosAlumnos) {
      alumnos.push(new Alumno(datosAlumno));
    }

    return alumnos;
  }

  static siguienteId() {
    let ultimoId = parseInt(localStorage.getItem('ultimoIdAlumno')) || 0;
    let nuevoId = ultimoId + 1;

    localStorage.setItem('ultimoIdAlumno', nuevoId);

    return nuevoId;
  }

  static borrarTodos() {
    localStorage.removeItem('alumnos');
    localStorage.setItem('ultimoIdAlumno', 0);
  }
}
