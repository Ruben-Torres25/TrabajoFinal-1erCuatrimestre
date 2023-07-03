// Variable para llevar el control del identificador actual
let identificadorActual = 1;

// Crear un arreglo de 1x3
let arregloInicial = new Array(1);
for (let index = 0; index < arregloInicial.length; index++) {
  arregloInicial[index] = new Array(3);
}

// Asignar valores a las posiciones del arreglo
arregloInicial[0][0] = 1;
arregloInicial[0][1] = 'Clase de los miércoles';
arregloInicial[0][2] = 'Casi termina';

// Función para eliminar una tarea según el identificador
const eliminarTarea = (identificador) => {
  // Crear un nuevo arreglo para almacenar las tareas que no se eliminaron
  const nuevoArreglo = [];

  // Tomar el arreglo inicial
  for (let index = 0; index < arregloInicial.length; index++) {
    const tarea = arregloInicial[index];

    // Si el identificador de la tarea no coincide con el identificador a eliminar, se agrega al nuevo arreglo
    if (tarea[0] !== identificador) {
      nuevoArreglo.push(tarea);
    }
  }

  // Reemplazar el arreglo inicial con el nuevo arreglo
  arregloInicial = nuevoArreglo;

  // Vuelve a dibujar la tabla actualizada
  dibujarTabla();
}

// Función para dibujar la tabla en el documento HTML
const dibujarTabla = () => {
  // Obtiene el documento Tbody
  const tbody = document.getElementById('tbody');
  tbody.innerHTML = '';

  // Tomo el arreglo inicial
  for (let index = 0; index < arregloInicial.length; index++) {
    const tarea = arregloInicial[index];
    let trClass = '';

    // Verifica el estado de la tarea para asignar una clase CSS, segun corresponda
    if (tarea[2] === 'Pendiente') {
      trClass = 'tarea-pendiente';
    }

    // Crea una fila (tr) para la tarea
    const tr = document.createElement('tr');
    tr.className = trClass;

    // Crea una celda (td) para el identificador de la tarea
    const tdId = document.createElement('td');
    tdId.textContent = tarea[0];
    tr.appendChild(tdId);

    // Crea una celda (td) para el nombre de la tarea, con la opción de ser editable
    const tdNombre = document.createElement('td');
    tdNombre.contentEditable = true;
    tdNombre.textContent = tarea[1];
    tr.appendChild(tdNombre);

    // Crea una celda (td) para el estado de la tarea
    const tdEstado = document.createElement('td');
    tdEstado.innerHTML = generarEstadoHtml(tarea[2], tarea[0]);
    tr.appendChild(tdEstado);

    // Crea una celda (td) para el botón de eliminar tarea
    const tdBoton = document.createElement('td');
    const eliminarButton = document.createElement('button');
    eliminarButton.type = 'button';
    eliminarButton.className = 'btn btn-outline-success';
    eliminarButton.textContent = 'Eliminar Tarea';
    eliminarButton.addEventListener('click', () => eliminarTarea(tarea[0]));
    tdBoton.appendChild(eliminarButton);
    tr.appendChild(tdBoton);

    // Agregar la fila a tbody
    tbody.appendChild(tr);
  }
  // Obtener todas las celdas editables de la tabla
  const celdas = document.querySelectorAll("#tbody td[contenteditable=true]");

  // Recorre todas las celdas
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener("input", function () {
      // Acciones a realizar cuando se modifica una celda
      const nuevoValor = this.textContent;
      console.log("Nuevo valor: " + nuevoValor);

      // Obtener el identificador de la tarea asociada a la celda
      const identificador = parseInt(this.parentNode.firstChild.textContent);
      
      // Actualizar el nombre de la tarea en el arreglo inicial
      for (let index = 0; index < arregloInicial.length; index++) {
        const tarea = arregloInicial[index];
        if (tarea[0] === identificador) {
          tarea[1] = nuevoValor;
          break;
        }
      }
    });
  }
}

// Función para generar el HTML de los radio buttons de estado de la tarea
const generarEstadoHtml = (estadoActual, identificador) => {
  const estados = ['Pendiente', 'En progreso', 'Completada'];
  let html = '';

  // Recorrer los estados disponibles
  for (let i = 0; i < estados.length; i++) {
    const estado = estados[i];
    const checked = estado === estadoActual ? 'checked' : '';

    // Agrega el HTML del radio button al string html
    html += `<label><input type="radio" name="estado-${identificador}" value="${estado}" ${checked}> ${estado}</label>`;
  }

  return html;
}

// Función para agregar una nueva tarea fija al arreglo inicial
const agregarTareaFija = () => {
  const tareaFija = new Array(3);
  identificadorActual += 1;
  tareaFija[0] = identificadorActual;
  tareaFija[1] = `Tarea Fija número ${identificadorActual}`;
  tareaFija[2] = 'Pendiente';
  arregloInicial.push(tareaFija);
  dibujarTabla();
}

// Función para inicializar el JavaScript
const inicializarJs = () => {
  dibujarTabla();

  // Obtener el botón de agregar tarea
  const boton = document.getElementById("agregarTarea");

  // Agregar un evento al botón para llamar a la función agregarTareaFija cuando se hace clic
  boton.addEventListener('click', function (e) {
    agregarTareaFija();
  });
}

// Agregar un evento al cargar la página para llamar a la función inicializarJs
window.addEventListener('load', inicializarJs);




