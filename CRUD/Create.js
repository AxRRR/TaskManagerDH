const fs = require('fs');

//CRUD - Create one or more new task in the Array.
const createNewTask = ( taskArray, newField ) => {

    taskArray.push(newField);
    fs.writeFileSync('./tareas.json', JSON.stringify(taskArray, null, '  '));

    console.log('-------- NEW FIELD INSERTED --------');
    console.log(newField);
    console.log('------------------------------------');
}

module.exports = createNewTask;