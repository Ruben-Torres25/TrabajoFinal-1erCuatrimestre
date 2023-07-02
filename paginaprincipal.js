let identificadorActual = 1;


let arregloInicial = new Array(1);
for (let index = 0; index < arregloInicial.length; index++) {
  arregloInicial[index] = new Array(3);
}

arregloInicial[0][0] = 1;
arregloInicial[0][1] = 'Clase de los miercoles';
arregloInicial[0][2] = 'Casi termina';

const eliminarTarea = (indentificador) => {
  const nuevoArreglo = new Array();
  for (let index = 0; index < arregloInicial.length; index++) {
    const tarea = arregloInicial[index];
    if (tarea[0] != indentificador) {
      nuevoArreglo.push(tarea);
    }
  }
  arregloInicial = nuevoArreglo;
  dibujarTabla();
}


const dibujarTabla = () => {
  let html = '';
  for (let index = 0; index < arregloInicial.length; index++) {
    const tarea = arregloInicial[index];
    let trClass = '';
    if (tarea[2] == 'Pendiente') {
      trClass = 'tarea-pendiente';
    }
    const trHtml = `<tr class="${trClass}"><td>${tarea[0]}</td><td>${tarea[1]}</td><td>${tarea[2]}</td><td>
    <button onclick="eliminarTarea(${tarea[0]})" type="button" class="btn btn-outline-success">Eliminar Tarea</button>
    </td></tr>`;
    html += trHtml;
  }
  document.getElementById('tbody').innerHTML = html;
}


const agregarTareaFija = () => {
  const tareaFija = new Array(3);
  identificadorActual += 1;
  tareaFija[0] = identificadorActual;
  tareaFija[1] = `Tarea Fija numero ${identificadorActual}`;
  tareaFija[2] = 'Pendiente';
  arregloInicial.push(tareaFija);
  dibujarTabla();
}


const inicializarJs = () => {
  dibujarTabla();

  const boton = document.getElementById("agregarTarea");
  boton.addEventListener('click', function (e) {
    agregarTareaFija();
  });
}

window.addEventListener('load', inicializarJs);
