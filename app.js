let addTask = document.getElementById("addtask")
let task = document.getElementById("task")
let list = document.getElementById("list")

addTask.addEventListener("click",() =>{
    console.log(task)


    list.innerHTML += `<div class = "main" ><li>${task.value}</li> <div> <button onclick = "edit (this)">Edit </button> <button> Delete</button> </div></div>`
    task.value = " "
})


function edit(element){
   
    let userTodo = element.parentNode.parentNode.firstChild;
    task.value = userTodo.innerText

    console.log(element.parentNode.parentNode.firstChild.innerText)
    addTask.innerHTML = "Save"
}
