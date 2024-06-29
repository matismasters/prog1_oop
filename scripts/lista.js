
class Lista {
    constructor(id, tipo, nombre) {
        this.id = id;
        this.tipo = tipo; // 'tareas' o 'compras'
        this.nombre = nombre; // 'Lista de tareas' o 'Lista de compras'
        this.tareas = [];
    }

    agregarTarea(descripcion) {
        this.tareas.push({ descripcion, completada: false})
    }

    marcarTareaCompletada(indice) {
        this.tareas[indice].completada = true;
    }
}
let LISTAS = [
    new Lista(1, 'tareas', 'Lista de tareas'),
    new Lista(2, 'compras', 'Lista de compras')
];

LISTAS[0].agregarTarea('Aprender JavaScript');
LISTAS[0].agregarTarea('Aprender React');
LISTAS[1].agregarTarea('Comprar pan');
LISTAS[1].agregarTarea('Comprar leche');

document.addEventListener("DOMContentLoaded", function() {
    let tbodyListas = document.getElementById("tbodyListas")

    for (let lista of LISTAS) {
        let tr = crearTrLista(lista);
        tbodyListas.appendChild(tr[0]);
        tbodyListas.appendChild(tr[1]);
    }
})

function crearTrLista(lista) {
    let tr = document.createElement("tr");

    let tdId = document.createElement("td");
    tdId.innerHTML = lista.id;
    tr.appendChild(tdId);

    let tdTipo = document.createElement("td");
    tdTipo.innerHTML = lista.tipo;
    tr.appendChild(tdTipo);

    let tdNombre = document.createElement("td");
    tdNombre.innerHTML = lista.nombre;
    tr.appendChild(tdNombre);

    let tr2 = document.createElement("tr");
    let tdTareas = document.createElement("td");
    tdTareas.setAttribute("colspan", 3);
    
    let tarea;
    for (let i = 0; i < lista.tareas.length; i++) {
        tarea = lista.tareas[i];

        let divTarea = document.createElement("div");
        divTarea.innerHTML = tarea.descripcion;

        let buttonCompletada = document.createElement("button");
        buttonCompletada.innerHTML = "Completada";
        buttonCompletada.setAttribute("id", i);
        buttonCompletada.addEventListener("click", function() {
            lista.marcarTareaCompletada(i);
            divTarea.style.textDecoration = "line-through";
        });

        divTarea.appendChild(buttonCompletada);
        tdTareas.appendChild(divTarea);
    }

    tr2.appendChild(tdTareas);

    return [tr, tr2];
}