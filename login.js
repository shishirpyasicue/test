

        function getCookie() {
            var search_cookie = "username" + "="
            if (document.cookie.length > 0) {
                start_position = document.cookie.indexOf(search_cookie)
                if (start_position != -1) {
                    start_position += search_cookie.length
                    end_position = document.cookie.indexOf(";", start_position)
                    if (end_position == -1)
                        end_position = document.cookie.length
                    return (decodeURIComponent(document.cookie.substring(start_position, end_position)))
                }
            }
        }


function validateCookie()
{

    var username = getCookie()
    if (typeof username === "undefined" || username === null) {
                
    }
    else {
        location.href = "./Profilepage.html";
    }
}
window.onload = validateCookie;
        

function CreateCookie() {
    if (document.login.txtUsername.value == "") {
        alert("Enter some value!");
        return;
    }
    var today = new Date(); // Actual date
    var expire = new Date(); // Expiration of the cookie
    var number_of_days = 10; // Number of days for the cookie to be valid (10 in this case)

    expire.setTime(today.getTime() + 60 * 60 * 1000 * 24 * number_of_days); // Current time + (60 sec * 60 min * 1000 milisecs * 24 hours * number_of_days)

    cookievalue = escape(document.login.txtUsername.value) ;
    document.cookie = "username=" + cookievalue + ";" + "expires=" + expire.toGMTString();
    //document.write("Setting Cookies : " + "username=" + cookievalue);
}

function redirectToRegister()
{
    location.href = './Register.html';
}
function validateform() {

    var txtUsername = document.login.txtUsername.value;
    var txtPassword = document.login.txtPassword.value
    var name = JSON.parse(localStorage.getItem('person'));

    if (txtUsername == null || txtUsername == "") {
        alert("Username can't be blank");
        return false;
    }
    else if (txtPassword == null || txtPassword == "") {
        alert("Password can't be blank");
        return false;
    }
    if (name == null) {
        alert("Please register yourself")
        location.href = "./Register.html";
        return false;
    }
    if (name.userName == document.login.txtUsername.value && name.password == document.login.txtPassword.value)
    {
        CreateCookie();
        // location.href = "../Profilepage.html";
        validateCookie();
    }
    else {
        alert("Invalid User ID or password");
        return false;
    }
}

