//Requerir paquete para leer el archivo JSON, es nativo por lo que no se requiere ponerle path
const fs = require('fs')

//console.log(fs)

// Crea un objeto literal con las funciones CRUD: Create, Read, Update and Delete
const tareas = {
  path: 'tareas.json',
  leer: function() {
    const listado = fs.readFileSync(this.path, 'utf-8')
    //console.log(listado)
    return JSON.parse(listado)
  },
  agregar: function() {
    const actual = this.leer();
    const long = actual.length;
    let nombre = `Tarea ${long+1}`;
    let newObj = {};
    newObj.title = nombre;
    newObj.status = "Pendiente";
    actual.push(newObj);
    //console.log(actual);
    fs.writeFile('tareas.json', JSON.stringify(actual),'utf8', (err) => { 
      if (err) throw err; 
      console.log(`\nSe ha agregado la ${nombre}!\n`); 
    });
  },
  escribirJSON: function (arrayTareas) {
    let arrayTareasJson = JSON.stringify(arrayTareas);
    fs.writeFileSync(this.path,arrayTareasJson,'utf-8')
  },
  guardarTarea: function(objTarea) {
    let lista = this.leer()
    let path = this.path
    let nuevaLista = [...lista, ...objTarea];
    this.escribirJSON(nuevaLista);
    objTarea.forEach(function(item,index) {
      console.log(`\n Se ha guardado  ${item.title}  a  ${path} \n`)
    })
  },
  filtrarPorEstado: function (estado) {
    let lista = this.leer();
    let listaFiltrada = lista.filter(function(tarea) {
      return tarea.status === estado;
    })
    return listaFiltrada;
  }
}
//console.log(tareas.leer())

// Se exporta el objeto literal
module.exports = tareas