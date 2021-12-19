
//CRUD - Filter the all elements by diferentes arguments.
const getElementsBy = (taskArray, filerToGet) => {
    const nextArray = taskArray.filter( e => e.estado === filerToGet);
    
    console.log('-------- ALL ELEMENTS FILTER --------');
    console.log(nextArray);
    console.log('------------------------------------');
}

module.exports = getElementsBy;