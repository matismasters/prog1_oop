# Programación orientada a objetos en JavaScript

## Fundamentos de la POO

La programación orientada a objetos (POO) es un paradigma de programación que utiliza objetos y sus interacciones para diseñar aplicaciones y programas informáticos. Existen otros paradigmas de programación, como la programación imperativa, o la programación funcional, pero la POO es uno de los más populares y la que estudiaremos durante la carrera.

### ¿Qué es un paradigma de programación?

Como ya hemos visto en clase, a medida que vamos avanzando en el desarrollo de aplicaciones, nos encontramos con que la base de código se va haciendo cada vez más grande y compleja.

1. A mayor complejidad, mayor dificultad para mantener y mejorar la aplicación. 
1. A mayor cantidad de programadores, mayor dificultad para que todos los miembros del equipo entiendan el código.

Una forma de solucionar estos problemas es aplicando paradigmas de programación. Un paradigma de programación es un estilo de programación que se basa en un conjunto de principios, reglas y normas que se deben seguir para realizar una tarea de programación. Los programadores acuerdan seguir estas reglas para que el código sea más legible, mantenible y escalable.

### ¿Qué es la programación orientada a objetos?

La programación orientada a objetos (POO) es un paradigma de programación que utiliza objetos y sus interacciones para diseñar aplicaciones y programas informáticos. La POO se basa en varios conceptos, como la abstracción, la encapsulación, la herencia y el polimorfismo.

Uno de sus principales fuertes es que utiliza la abstracción para crear modelos del mundo real. De esta forma, los programadores no tienen que aprender un sistema de abstracción completamente nuevo, sino que pueden guiarse en gran medida por referencias del mundo real.

Por ejemplo:

- Si vamos a diseñar una aplicación para la gestión de un centro de enceñanza, todos podemos intuir que vamos a tener que trabajar con datos de alumnos, profesores, asignaturas, etc. En este caso, podríamos crear una clase `Alumno`, una clase `Profesor`, una clase `Asignatura`, etc.
- Si vamos a diseñar una aplicación para la gestión de un supermercado, todos podemos intuir que vamos a tener que trabajar con datos de productos, clientes, ventas, etc. En este caso, podríamos crear una clase `Producto`, una clase `Cliente`, una clase `Venta`, etc.
- Si vamos a diseñar una aplicación para la gestión de un hospital, todos podemos intuir que vamos a tener que trabajar con datos de pacientes, médicos, tratamientos, etc. En este caso, podríamos crear una clase `Paciente`, una clase `Médico`, una clase `Tratamiento`, etc.

Luego, deberíamos ocuparnos de la forma en que utilizaremos estos datos, y en como se relacionan entre si. Por ejemplo, un alumno puede tener asignaturas, un profesor puede tener alumnos, un producto puede tener ventas, un cliente puede tener compras, un paciente puede tener tratamientos, etc. Esto quiere decir que hay una relación entre ellos y que podemos modelarla en nuestro código.

### ¿Qué son las clases y los objetos?

En la programación orientada a objetos, una clase es una plantilla para crear objetos (un "molde" para crear objetos). Una clase define las propiedades y los métodos que tendrán los objetos que se creen a partir de ella.

Una instancia de una clase es un objeto que se crea a partir de una clase.

Por ejemplo, la clase `Alumno` podría tener las siguientes propiedades:

- `nombre`
- `apellido`
- `edad`
- `curso`

Y los siguientes métodos:

- `anoNacimiento()` (devuelve el año de nacimiento del alumno)
- `nombreCompleto()` (devuelve el nombre completo del alumno)
- `esMayorEdad()` (devuelve si el alumno es mayor de edad)
- `guardar()` (guarda los datos del alumno en la base de datos)
- `eliminar()` (elimina los datos del alumno de la base de datos)

De esta forma, sabiendo que todos los alumnos de nuestro sistema tendrán estas propiedades y métodos, podemos tratar a todos los alumnos de la misma forma, sin importar si son de primero, segundo, tercero, etc. A esto le llamamos **abstracción**. Agrupamos propiedades y comportamientos en una clase, para que todas las instancias se comporten de la misma forma.

### Principios de la POO

**Abstracción**: 

La abstracción es el proceso de simplificar las cosas. En programación orientada a objetos, la abstracción consiste en simplificar los objetos del mundo real en clases. Por ejemplo, un coche puede tener propiedades como `marca`, `modelo`, `color`, `velocidad`, etc. Las propiedades y comportamientos reflejarán la realidad, pero sólo aquella información que sea relevante para el sistema. 

**Encapsulación**: 

La encapsulación es el proceso de ocultar los detalles de implementación de un objeto y mostrar sólo las características que sean necesarias para interactuar con él. En programación orientada a objetos, la encapsulación consiste en agrupar los datos y los métodos que operan sobre esos datos en una misma unidad, llamada clase. De esta forma, los datos de la clase sólo pueden ser accedidos y modificados a través de los métodos de la misma.

**Herencia**: 

La herencia es un mecanismo que permite que una clase herede las propiedades y los métodos de otra clase. La clase que hereda se llama subclase, y la clase de la que hereda se llama superclase. La herencia permite reutilizar el código y extender la funcionalidad de una clase sin tener que modificarla.

**Polimorfismo**: 

El polimorfismo es un mecanismo que permite que un objeto pueda ser tratado como si fuera de otro tipo. En programación orientada a objetos, el polimorfismo consiste en que un objeto de una subclase pueda ser tratado como si fuera de una superclase. Esto permite que un objeto pueda ser utilizado de diferentes formas, dependiendo del contexto en el que se encuentre.

### Método `constructor()`

El método `constructor()` es un método especial que se llama automáticamente cuando se crea un objeto a partir de una clase usando la palabra `new`. El método `constructor()` se utiliza para inicializar las propiedades de un objeto cuando se crea una instancia de la clase.

```javascript
// Definición de la clase Alumno
class Alumno {
  constructor(nombre, apellido, edad, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.curso = curso;
  }
}

// Creación de una instancia/objeto de la clase Alumno
let alumno = new Alumno('Juan', 'Pérez', 20, 'Primero'); // llama a `constructor()`
```

### Palabra clave `this`

La palabra clave `this` se refiere al objeto actual en el que se está trabajando. En el contexto de una clase, `this` se refiere a la instancia de la clase que se está creando.

### Métodos de instancia

Los métodos de instancia son métodos que se definen en la clase y que se pueden llamar en las instancias de la clase. Los métodos de instancia se definen dentro de la clase, pero fuera del método `constructor()`.

```javascript
// Definición de la clase Alumno
class Alumno {
  constructor(nombre, apellido, edad, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.curso = curso;
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
}

// Creación de una instancia/objeto de la clase Alumno
let alumno = new Alumno('Juan', 'Pérez', 20, 'Primero');

console.log(alumno.anoNacimiento()); // 2001
console.log(alumno.nombreCompleto()); // Juan Pérez
console.log(alumno.esMayorEdad()); // true
```

### Métodos estáticos

Los métodos estáticos son métodos que se definen en la clase y que se pueden llamar en la clase misma, sin necesidad de crear una instancia de la clase. Los métodos estáticos se definen con la palabra clave `static`.

```javascript
// Definición de la clase Alumno
class Alumno {
  static buscarPorNombre(nombre) {
    // Buscar un alumno por nombre en la base de datos
    // y lo devuelve como un objeto Alumno
  }

  static todos() {
    // Devuelve todos los alumnos de la base de datos
    // como un array de objetos Alumno
  }
}

// Llamada a un método estático de la clase Alumno
let alumno = Alumno.buscarPorNombre('Juan'); // no hacemos `new`
```

### Ejemplo de programación orientada a objetos en JavaScript

```html
  <!-- Usamos el tag script de la misma forma que antes -->
  <script src="scripts/alumno.js" defer></script>
```

```javascript
// Definimos la clase Alumno
class Alumno {
  constructor(nombre, apellido, edad, curso) {
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
    if (!this.nombre || this.nombre === '') {
      this.errores.push('El nombre es obligatorio');
    }

    if (!this.apellido || this.apellido === '') {
      this.errores.push('El apellido es obligatorio');
    }

    if (!this.edad || isNaN(parseInt(this.edad))) {
      this.errores.push('La edad es obligatoria');
    }

    if (!this.curso || this.curso === '') {
      this.errores.push('El curso es obligatorio');
    }
  }

  guardar() {
    this.validar();

    if (this.errores.length > 0) {
      console.log('No se puede guardar el alumno porque hay errores en los datos');
      return false;
    }

    console.log('Guardando los datos del alumno en la base de datos');
    // Guardar los datos del alumno en la base de datos
  }

  eliminar() {
    console.log('Eliminando los datos del alumno de la base de datos');
    // Eliminar los datos del alumno de la base de datos
  }

  static buscarPorNombre(nombre) {
    // Buscar un alumno por nombre en la base de datos
    // y lo devuelve como un objeto Alumno
  }

  static todos() {
    // Devuelve todos los alumnos de la base de datos
    // como un array de objetos Alumno
  }
}
```
## Ejercicios

1. Crear una clase Auto con al menos 4 propiedades comunes a todos los autos, y al menos un método que utiliza las propiedades de la clase. 

2. Crear una clase Casa con al menos 4 propiedades comunes a todas las casas, y al menos un método que utiliza las propiedades de la clase.

3. Crear una clase Empleado con al menos 4 propiedades comunes a todos los empleados, y al menos un método que utiliza las propiedades de la clase.