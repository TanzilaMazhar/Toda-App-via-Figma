//function clickTask and clickLocation
function clickLocation() {
    window.location.href = "location.html"
}

function clickTask() {
    window.location.href = "task.html"
}

let model = document.querySelector(".mymodel");
let newtaskbtn = document.querySelector("#btn-task");

// function to show the modal
function showModal() {
    model.style.display = "block";
}

// //function to close the modal
function closemodal() {
    model.style.display = "none";
}

//function to logout the task
function logout() {
    window.location.href = 'login.html';
}

//        js for task add from modal
document.querySelector(".Add-new-task-btn").addEventListener("click", function () {
    document.querySelector(".new-task-modal").classList.remove("mymodel")
});

document.querySelector("#btnCancel").addEventListener("click", function () {
    document.querySelector(".new-task-modal").classList.add("mymodel")
});

document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

    let summary = document.querySelector(".Summary").value;
    let description = document.querySelector(".description").value;
    let Duedate = document.querySelector(".Duedate");

    AddTaskToList(summary, description, Duedate)

    //clear form
    document.querySelector(".form").reset();
});

function AddTaskToList(summary, description, Duedate) {
    let Incompletelist = document.querySelector("#Incomplete");
    const now = new Date();                       //Date
    const time = now.toLocaleTimeString();          //Time
    const dateTime = `${Duedate} ${time}`;              //combine date and time

    let taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <div class="check">
        <input type="checkbox" class = "chk-box">
        <span class = "text"> ${summary}</span>
        </div>
        <img src = "pictures/clock.png"> ${dateTime}
        `;

    taskItem.querySelector(".chk-box").addEventListener("change", function () {
        if (this.checked) {
            MoveToComplete(taskItem)
        }
    })
    Incompletelist.appendChild(taskItem);
};

function MoveToComplete(taskItem) {
    let completedTasks = document.querySelector("#complete");
    let completeditem = document.createElement("li");
    completeditem.innerHTML = taskItem.querySelector(".check").outerHTML;
    completedTasks.appendChild(completeditem);
    taskItem.remove;
}



// skip and remind me later functionality
function showReminderPopup() {
    let popupMenue = document.querySelector(".third-col");
    popupMenue.style.display = "block";
}

function RemindMeLater() {
    let popupMenue = document.querySelector(".third-col");
    popupMenue.style.display = "none";

    let remindtimeout = 5 * 5 * 100;
    setTimeout(showReminderPopup, remindtimeout);
}

function closepopUp() {
    let popupMenue = document.querySelector(".third-col");
    popupMenue.style.display = "none";
}