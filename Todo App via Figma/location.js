function logout() {
    window.location.href = "login.html"
}

function clickTask() {
    window.location.href = "task.html"
}

function checkIn() {
    let taskinput = prompt("Enter a new task");
    if (taskinput === null || taskinput.trim() === "") {
        alert("please enter a valid task")
        return;
    }
    AddTaskToList(taskinput)
}

function AddTaskToList(task) {
    let cities = ["NewYork", "Tokyo", "Paris", "Landon", "Behrin", "Istunbol"];
    let states = ["USA", "UAE", "SA", "NY", "CA", "TX", "LE", "IL"];
    let countries = ["UK", "Japan", "France", "Germany", "Canada"];

    let randomcity = cities[Math.floor(Math.random() * cities.length)];
    let randomstate = states[Math.floor(Math.random() * states.length)];
    let randomcountry = countries[Math.floor(Math.random() * countries.length)];

    let randomlocation = ` ${randomcity} , ${randomstate} , ${randomcountry}`;

    let currentlist = document.querySelector(".Current");
    let listitem = document.createElement("li");

    listitem.innerHTML = `
      <div class='check'>
      <input type="checkbox" class="chk-box">
      <span>${task} - ${randomlocation}</span>
    </div>`;

    //add eventlistener to chkbox
    listitem.querySelector(".chk-box").addEventListener("change", function () {
        if (this.checked) {
            MovetoPrevious(listitem)
        }
    })
    currentlist.appendChild(listitem)
}

function MovetoPrevious(listitem) {
    const previoustask = document.querySelector(".previous")
    previoustask.appendChild(listitem);
}