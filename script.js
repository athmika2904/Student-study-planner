const form=document.getElementById("taskform");
const taskinput=document.getElementById("inp-task");
const categoryselect=document.getElementById("category-select");
const priorityselect=document.getElementById("priority-select")
const dateselect=document.getElementById("date-input");
const formlist=document.getElementById("form-list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTask();
form.addEventListener("submit",(e)=>{
    e.preventDefault();
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
})
function renderTask(){
    tasks.forEach((task)=>{
        const taskdiv=document.createElement("div");
        taskdiv.classList.add("task-div");
        taskdiv.innerHTML=`
        <h3>${task.title}</h3>
        <p>Category:${task.category}</p>
        <p>Priority:${task.priority}</p>
        <p>DueDate:${task.date}</p>`;
        formlist.appendChild(taskdiv);
    })
    
}