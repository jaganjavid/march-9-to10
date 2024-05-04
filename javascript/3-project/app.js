
// Define UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const allListItems = document.querySelectorAll("ul li");
const clearBtn = document.querySelector(".clear-task");


loadEventListener(); //have to learn hoisting

// Load all event listeners

function loadEventListener() {

    // Add Task Event
    form.addEventListener("submit", addTask);


    // Remove Task List
    taskList.addEventListener("click", removeTask);

    // Clear Task List
    clearBtn.addEventListener("click", clearTasks);


}

function addTask(e) {

    e.preventDefault();

    // Validate
    if (taskInput.value === "") {
        alert("Please fill the form");
        return;
    }


    // check if it exist

    const existingtasks = document.querySelectorAll(".collection-item");

    for(let task of existingtasks){
       if(task.innerText.trim() === taskInput.value.trim()){
         alert("Already exist");
         return;
        }
    }



    // Create a li element
    const li = document.createElement("li");

    // Add a Class
    li.className = "collection-item";

    // Create a text node
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a new link element
    const link = document.createElement("a");

    // Add class to link
    link.className = "delete-item secondary-content";

    // Add icon html
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    // add link to li
    li.appendChild(link);

    // Add li to ul
    taskList.appendChild(li);


    taskInput.value = "";
}


function removeTask(event) {
    //    if(event.target.parentElement.className === "delete-item secondary-content"){
    //     event.target.parentElement.parentElement.remove();
    //    }

    if (event.target.parentElement.classList[0] === "delete-item") {
        event.target.parentElement.parentElement.remove();
    }
}


function clearTasks() {

    // console.log();
    // const changeToArr = Array.from(taskList.children);

    // changeToArr.forEach(function(element){
    //     element.remove();
    // })

    // allListItems.forEach(function(element){
    //     element.remove();
    // })

    taskList.innerHTML = null;


}