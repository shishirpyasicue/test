    
        

    function store() {

        if (typeof (Storage) !== "undefined") {
            // Code for localStorage
            var person = {
                userName:document.registration.txtUsername.value,
                firstName:  document.registration.txtFirstname.value,
                lastName: document.registration.txtLastname.value,
                address: document.registration.txtAddress.value,
                password: document.registration.txtPassword.value,
            };
            // var userid = document.getElementById("userid");
            localStorage.setItem("person",JSON.stringify( person));
        } else {
            // No web storage Support.
        }
    }
  
function getitem() {
    var name = JSON.parse(localStorage.getItem('person'));
}
        
function validateform(form) {
        
   
    var txtUsername = document.registration.txtUsername.value;
    var txtFirstname = document.registration.txtFirstname.value;
    var txtLastname = document.registration.txtLastname.value;
    var txtAddress = document.registration.txtAddress.value;    
    var txtPassword = document.registration.txtPassword.value;
    var txtconfirmPassword = document.registration.txtConfirmPassword.value;



    if (txtUsername == null || txtUsername == "") {
        alert("Email can't be blank");
        return false;
    }

 
    else if (txtPassword.length > 16) {
        alert("Password must not be more than 16 characters long.");
        return false;
    }
    else if (txtPassword.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    else if (txtPassword != txtconfirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    else if (txtFirstname == null || txtFirstname == "") {
        alert("Firstname can't be blank");
        return false;
    }
    else if (txtLastname == null || txtLastname == "") {
        alert("Lastname can't be blank");
        return false;
    }
    else if (txtAddress == null || txtAddress == "") {
        alert("Address can't be blank");
        return false;
    }

    else if (form.opGender.value == "Select") {
        alert("Please choose your Gender");
        return false;
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(txtUsername)) {
    
    }
    else {
        alert("You have entered an invalid email address!")
        return false;
    }

    store();
    //getitem();

    location.href = "./Login.html";
}
