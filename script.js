const form=document.getElementById("taskform");
const taskinput=document.getElementById("inp-task");
const categoryselect=document.getElementById("category-select");
const priorityselect=document.getElementById("priority-select")
const dateselect=document.getElementById("date-input");
const formlist=document.getElementById("form-list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(taskinput.value.trim()===""){
        alert("Please enter a task");
        return;
    }
    const task={
        id:Date.now(),
        title:taskinput.value,
        category:categoryselect.value,
        priority:priorityselect.value,
        date:dateselect.value,
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask();
    form.reset();
})
function renderTask(){
    formlist.innerHTML="";
    tasks.forEach((task)=>{
        const taskdiv=document.createElement("div");
        taskdiv.classList.add("task-div");
        taskdiv.innerHTML=`
        <h3>${task.title}</h3>
        <p>Category:${task.category}</p>
        <p>Priority:${task.priority}</p>
        <p>DueDate:${task.date}</p>
        <button class="delete-btn" data-id="${task.id}">Delete</button>`;
        formlist.appendChild(taskdiv);
        
    })
    
}
formlist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-btn")){
        const taskid=Number(e.target.dataset.id)
        deleteTask(taskid);
    }
})
function deleteTask(taskid){
    tasks=tasks.filter(t=>t.id!==taskid);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    renderTask();
}
renderTask();