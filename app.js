const Task = require('./tareas.json');
const getAllElements = require('./CRUD/Read');
const createNewTask = require('./CRUD/Create');
const deleteElementById = require('./CRUD/Delete');
const getElementsBy = require('./CRUD/Filter');

// Example:
const taskExample = {
    codigo: 12,
    titulo: 'Hacer una funcion que sume todos los elementos.',
    estado: 'Pediente'
}

// Methods: 

// getAllElements(Task);
// createNewTask(Task, taskExample);
// deleteElementById(Task, 12);
// getElementsBy(Task, 'Terminada');

