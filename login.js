


window.onload = checkLogin;//Checks  if user is logged in already

function checkLogin() {
    if (sessionStorage.loggedInUsrEmail !== undefined) {
        //Extract details of logged in user
        let usrObj = JSON.parse(localStorage[sessionStorage.loggedInUsrEmail]);

        //Say hello to logged in user
        document.getElementById("loginPara").innerHTML = usrObj.email + " logged in .";
    }
}

let cookies = document.cookie;

function login() {


    //Get username
    let username = document.getElementById("UserInput").value;
    //User does not have an account
    if (localStorage[username] === undefined) {
        //Inform user that they do not have an account
        document.getElementById("loginFailure").innerHTML = "Not recognized. Do you have an account?";
        return; //Do nothing else
    }
    else {//User has an account
        let usrObj = JSON.parse(localStorage[username]);//Convert to object
        let password = document.getElementById("passwordInput").value;

        if (password === usrObj.password) {//Successful login
            document.getElementById("loginPara").innerHTML = usrObj.username + " logged in .";

            sessionStorage.loggedInUsername = usrObj.username;
        }
        else {
            document.getElementById("loginFailure").innerHTML = "Your given information is incorrect";
            return false;

        }
    }
}
//for the username field in empty state
function tryLogin() {
    let ser = document.getElementById("UserInput").value;
    if (ser == '') {
        document.getElementById('lit').innerText = "Enter the username";
        return false;
    }
}


//for the password field in empty state
function passwordLogin() {
    let ser = document.getElementById("passwordInput").value;
    if (ser == '') {
        document.getElementById('littt').innerText = "Fill a correct password";
        return false;
    }
}
//clear storage
function logout() {
    sessionStorage.loggedInUsername = undefined;
    window.location.reload();
}



