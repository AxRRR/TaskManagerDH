const fs = require('fs');

// CRUD - Delete one or more tasks of the Array.
const deleteElementById = (taskArray, deleteID) => {
    let nextArray = taskArray.filter( e => e.codigo !== deleteID);
    fs.writeFileSync('./tareas.json', JSON.stringify(nextArray, null, '  '));

    console.log('-------- DELETE FIELD --------');
    console.log(' The ID field with the id ' + deleteID + ' has been delete.');
    console.log(nextArray);
    console.log('------------------------------------');
}

module.exports = deleteElementById;