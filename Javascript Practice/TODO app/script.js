const listInput = document.getElementById("list-input");
const taskList = document.getElementById("task-list");
const addTask = document.getElementById("add-task");

let todos=[];

// Learnt about Element Event Listeners
addTask.addEventListener('click',function(){
  
    let task = listInput.value;

    if(!task){alert("Enter some Task TODO"); return;}

    // Learnt about Array Push
    todos.push({
        text:task,
        status:0
    });
    refreshTodos();
    listInput.value="";
});

function toggleStatus(index){

    let task = todos.find((task,i)=>i===index); // Learnt about Array Find
    task.status=!task.status;
    todos[index]=task; // Learnt about Array Index Replacement
    //todos.fill(task, index,index); // Learnt about Array Index Replacement via Fill
    refreshTodos();
}

function trashTask(index){

  todos.splice(index,1); // Learnt about splice Method
  refreshTodos();
}

function refreshTodos(){

    taskList.innerHTML="";

    // Learnt Foreach
    todos.forEach((task,index) =>{

        // Learnt String Literals
        // Learnt about onchange
        // Learnt about onclick

        taskList.innerHTML+=`<div class="task">
            <input type="checkbox" onchange="toggleStatus(${index})" ${task.status?'checked':''}>
            <p>${task.text}</p>
            <span class="trash" title="Remove" onclick="trashTask(${index})">&times;</span>
        </div>`
    });
}
