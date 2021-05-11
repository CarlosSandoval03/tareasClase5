// Requerir Modulo con las funciones (objeto literal creado en funcionesDeTareas)
const funciones = require('./funcionesDeTareas')

// Cargar tareas en memoria 
  // Cargar las tareas del archivo json a través de las funciones programadas
const listado = funciones.leer()

// Accion obtenida desde linea de comandos
    // Cuando se ejecuta en terminal, al buscar la posición 2, devuelve la palabra que se escriba después del script a ejecutar
let accion = process.argv[2];
//console.log('PRUEBA...   ')
//console.log(accion);

// Selección de funciones
switch(accion) {
  case 'listar':
    console.log('\n')
    /* for(let i = 0; i < listado.length; i++) {
      console.log(`titulo: ${listado[i].title} status: ${listado[i].status}`)
    } */
    listado.forEach(function(item,index) {
      console.log(`${index} .-   titulo: ${item.title} status: ${item.status}`)
    })
    console.log('\n')
    break;
  case undefined:
    console.log('\nAtención - Tienes que pasar una acción.\n');
    break;
  case 'agregar':
    //TODO: Crear funcionalidad para agregar una tarea al listado
    funciones.agregar();
    break;
  case 'crear':
    let nuevaTareaTitulo = process.argv[3];
    let nuevaTarea = [{
      title: nuevaTareaTitulo,
      status: "pendiente"
    }]
    funciones.guardarTarea(nuevaTarea);
    break;
  case 'filtrar':
    let estado = process.argv[3];
    let listaFiltrada = funciones.filtrarPorEstado(estado);
    console.log(`\nLas tareas con status "${estado} son:`)
    listaFiltrada.forEach(function(item,index) {
      console.log(`${index} .-   titulo: ${item.title}`)
    })
    console.log("\n")
  break;
  default:
    console.log('\nNo entiendo que quieres hacer\n');
<<<<<<< HEAD
    console.log("Parte 3 - prueba 2 conflictos y uso de pull")
=======
    console.log("Parte 1 - prueba 2 - conflictos y uso de pull")
>>>>>>> 4714798da7fbe841d7b49207ae49c85c5b98d83d
}

// console.log("Prueba de github y detección de cambios")
console.log("Parte 2 - prueba 2 - conflictos y uso de pull")

