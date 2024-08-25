// javascript for login
//function to check email
function checkemail(email) {
    let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
}

//function to check password
function passwordcheck(password) {
    let passwordlength = password.length;
    if (passwordlength >= 5) {
        return true;
    }
    return false;
}

//function to click on "show / hide" in password
document.querySelector(".show").addEventListener("click", function () {
    let passwordfield = document.querySelector("#password");
    if (passwordfield.type === "password") {

        passwordfield.type = "text";
        this.textContent = "HIDE";
    }
    else {
        passwordfield.type = "password";
        this.textContent = "SHOW";
    }
});

//function to click on login
document.querySelector(".btn").addEventListener("click", function () {
    let Email = document.querySelector("#mail").value;
    let Password = document.querySelector("#password").value;

    if (checkemail(Email) && passwordcheck(Password)) {
        window.location.href = "task.html";
    }
    else {
        alert("Invalid email and password");
    }
});