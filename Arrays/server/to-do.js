

const tasks = [{ nombre: "sacar a pasear al pato", estado: "pendiente", fecha: "02/06/2022" },
{ nombre: "dormir", estado: "hecha", fecha: "02/06/2022" },
{ nombre: "tomar agua", estado: "pendiente", fecha: "02/06/2022" }];


console.log(tasks);
tasks.forEach(task => task.stock = "10")
console.log(tasks)
let str = "";
let strHechas = "";

tasks.forEach(task =>{
    if(`${task.estado}`=='hecha'){
        strHechas += `<ul><del> ${task.nombre} ${task.fecha}</del></ul>`;
    }else {
        str += `<ul><input type="checkbox"> ${task.nombre} ${task.fecha}</ul>`;
    }
})
const toDoList = document.getElementById('to-do-list');
toDoList.innerHTML += str;
toDoList.innerHTML += strHechas;
console.log(str)
