let task = document.getElementById("task");
let btn = document.getElementById("add");
let tasks = document.querySelector(".all-tasks");

// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", loadTasks);

btn.addEventListener("click", () => {
    if (task.value === "") {
        alert("Enter your task, please!");
    } else {
        addTask(task.value, false);
        task.value = "";
    }
});

function addTask(taskText, isDone, taskDate) {
    let el = document.createElement('div');
    el.classList.add('task');

    // Add a check button
    let d = document.createElement('button');
    d.classList.add('done');
    d.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    if (isDone) {
        el.style.textDecoration = "line-through";
    }
    el.appendChild(d);

    let task1 = document.createElement('li');
    task1.innerHTML = `${taskText}`;
    el.appendChild(task1);

    // Add a trash button to task1
    let del = document.createElement('button');
    del.classList.add('delete');
    del.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    task1.appendChild(del);

    // Add a date to your task mentioned
    let agenda = document.createElement("input");
    agenda.setAttribute("type", "date");
    agenda.setAttribute("id", "calendrier");
    agenda.value = taskDate;
    task1.appendChild(agenda);

    tasks.appendChild(el);

    d.addEventListener('click', function () {
        this.parentElement.style.textDecoration = "line-through";
        updateLocalStorage();
    });

    del.addEventListener('click', function () {
        el.remove();
        updateLocalStorage();
    });
    agenda.addEventListener("change",function(){
         updateLocalStorage();
    })

    updateLocalStorage();
}

function updateLocalStorage() {
    let allTasks = [];
    document.querySelectorAll('.task').forEach(taskEl => {
        let taskText = taskEl.querySelector('li').innerText;
        let isDone = taskEl.style.textDecoration === "line-through";
        let taskDate = taskEl.querySelector('input[type="date"]');
        allTasks.push({ text: taskText, done: isDone, date: taskDate.value });
    });
    localStorage.setItem('tasks', JSON.stringify(allTasks));
}

function loadTasks() {
    let allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    allTasks.forEach(task => addTask(task.text, task.done, task.date));
}    