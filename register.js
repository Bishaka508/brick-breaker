
function StoreUser() {
    //Build object that we are going to store

    var usrObject = {};

    
    usrObject.email = document.getElementById("EmailInput").value;
    usrObject.password = document.getElementById("PasswordInput").value;
    usrObject.username = document.getElementById("UserInput").value;
    usrObject.phone = document.getElementById("Phone").value;
    usrObject.continent = document.getElementById("continent").value;
    usrObject.score = 0;
    usrObject.highScore = 0;
    //Store user

    localStorage[usrObject.username] = JSON.stringify(usrObject);

    //Inform user of Result
    document.getElementById("Result").innerHTML = "<b>Registration successful.</b>";
}

//email validation 
function ValidateEmail() {
    var emailformat = document.getElementById("EmailInput").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailformat == '') {
        document.getElementById('redco').innerText = "Please enter the email!!";
        return false;
    }
    else if (emailformat != mailformat) {
        document.getElementById('redco').innerText = "A valid email should have @ and '.' ";
        return false;
    }
}

// password validation when it is empty
function checkPassword() {
    var pass1 = document.getElementById("PasswordInput").value;
    if (pass1 == '') {
        document.getElementById('red').innerText = "Please enter the passwords!!";
        return false;
    }
}

//user validation when it is empty 
function checkUser() {
    var uss = document.getElementById("UserInput").value;
    if (uss == '') {
        document.getElementById('redcol').innerText = "Enter the username";
        return false;
    }
}
//phone number validation when its empty
function checkPhoneNo() {
    var phn = document.getElementById("Phone").value;
    if (phn == '') {
        document.getElementById('redcolor').innerText = "The phn number must start from 0 and should contain 11 numbers.";
        return false;
    }
}


