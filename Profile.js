
function validateform() {
    var inputs = document.getElementsByClassName("c1");
    var Person = {

        firstName: "",
        lastName: "",
        address: "",
        userName: "",

    };

    Person.firstName = inputs[0].value;
    Person.lastName = inputs[1].value;
    Person.address = inputs[2].value;
    Person.userName = inputs[3].value;

    

    if (Person.userName == null || Person.userName == "") {
        alert("Email can't be blank");
        return false;
    }


    else if (Person.firstName == null || Person.firstName == "") {
        alert("Firstname can't be blank");
        return false;
    }
    else if (Person.lastName == null || Person.lastName == "") {
        alert("Lastname can't be blank");
        return false;
    }
    else if (Person.address == null || Person.address == "") {
        alert("Address can't be blank");
        return false;
    }
}
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1) ; i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function logout() {
    localStorage.clear();

    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
        eraseCookie(cookies[i].split("=")[0]);
    alert("Logged out successfully");

    location.href = "./Login.html";

}
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
function eraseCookie(name) {
    createCookie(name, "", -1);
}
function DeleteTodo() {
    var storagecount = localStorage.length; //Get the Storage Count
    var table = document.getElementById("myTable2").tBodies[0];
    var rowCount = table.rows.length;

    // var i=1 to start after header
    for (var i = 1; i < rowCount - 1; i++) {
        var row = table.rows[i];
        // index of td contain checkbox is 8
        var chkbox = row.cells[0].getElementsByTagName('input')[0];
        if ('checkbox' == chkbox.type && true == chkbox.checked) {
            table.deleteRow(i);

            var todo = localStorage.getItem('Todo'); //Get Data from Key
            if (todo != null) {
                var data = JSON.parse(todo);


                data.splice(i - 1, 1);

                localStorage.setItem("Todo", JSON.stringify(data));
            }
        }
    }
    window.location.reload();
}


function edit_row(no) {
    document.getElementById('todorowid').value = no;

    document.getElementById('btnadd').value = "Save";

    var inputs = document.getElementsByClassName("c2");
    var oTable = document.getElementById('myTable2');

    //document.getElementById("edit_button" + no).style.display = "none";
    //document.getElementById("save_button" + no).style.display = "block";
    document.getElementById("txtToDo").value = oTable.rows[no + 1].cells[0].innerText;
    document.getElementById("txtStartDate").value = oTable.rows[no + 1].cells[1].innerText;
    document.getElementById("txtDueDate").value = oTable.rows[no + 1].cells[2].innerText;
    document.getElementById("txtCategories").value = oTable.rows[no + 1].cells[3].innerText;
    document.getElementById("txtispublic").value = oTable.rows[no + 1].cells[4].innerText;
    document.getElementById("txtdescription").value = oTable.rows[no + 1].cells[5].innerText;


}
(function () {
    //The Person Object used to store data in the LocalStorage
    var Person = {

        firstName: "",
        lastName: "",
        address: "",
        userName: "",

    };

    var Todo = [{
        toDoname: "",
        startDate: "",
        dueDate: "",
        categories: "",
        ispublic: "",
        description: ""
    }]

    //JavaScript object containing methods for LocalStorage management
    var applogic = {
        //Clear All Entries, by reading all elements having class as c1
        clearuielements: function () {
            var inputs = document.getElementsByClassName("c1");
            for (i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
        },
        //Save Entry in the Localstorage by eading values entered in the
        //UI


        loadProfile: function () {
            var datacount = localStorage.length;
            if (datacount > 0) {

                var person = localStorage.getItem('person'); //Get Data from Key
                var data = JSON.parse(person); //Parse the Data back into the object
               
                document.getElementById("txtEmail").value = data.userName;
                document.getElementById("txtFirstName").value = data.firstName;
                document.getElementById("txtLastName").value = data.lastName;
                document.getElementById("txtAddress").value = data.address;
                document.getElementById("Title").value = data.firstName;

            }
            else {

                location.href = "./Login.html";

            }
        },
        saveitem: function () {

            validateform();
            var lscount = localStorage.length; //Get the Length of the LocalStorage
            //Read all elements on UI using class name
            var inputs = document.getElementsByClassName("c1");
            //Person.Id = inputs[0].value;
            Person.firstName = inputs[0].value;
            Person.lastName = inputs[1].value;
            Person.address = inputs[2].value;
            Person.userName = inputs[3].value;


            //Convert the object into JSON ans store it in LocalStorage
            localStorage.setItem("person", JSON.stringify(Person));
            //Reload the Page
            location.reload();
        },
        saveTodoitem: function () {
            var lscount = localStorage.length; //Get the Length of the LocalStorage
            //Read all elements on UI using class name
            var inputs = document.getElementsByClassName("c2");
            //Person.Id = inputs[0].value;



            // var data1= new Todo();
            var todo = localStorage.getItem('Todo'); //Get Data from Key
            if (todo == null) {
                var Todo = [{
                    toDoname: inputs[0].value,
                    startDate: inputs[1].value,
                    dueDate: inputs[2].value,
                    categories: inputs[3].value,
                    ispublic: inputs[4].value,
                    description: inputs[5].value
                }]
                localStorage.setItem("Todo", JSON.stringify(Todo));
                //Reload the Page
                location.reload();

            }
            else {

                if (document.getElementById('btnadd').value == "Save") {
                    var i = document.getElementById('todorowid').value


                    var todo = localStorage.getItem('Todo'); //Get Data from Key
                    if (todo != null) {
                        var data = JSON.parse(todo);


                        data[i].toDoname = inputs[0].value,
                        data[i].startDate = inputs[1].value,
                        data[i].dueDate = inputs[2].value,
                        data[i].categories = inputs[3].value,
                        data[i].ispublic = inputs[4].value,
                        data[i].description = inputs[5].value
                    }
                    localStorage.setItem("Todo", JSON.stringify(data));
                    location.reload();
                    return;
                }
                var data = JSON.parse(todo);

                var Todo = {
                    toDoname: inputs[0].value,
                    startDate: inputs[1].value,
                    dueDate: inputs[2].value,
                    categories: inputs[3].value,
                    ispublic: inputs[4].value,
                    description: inputs[5].value
                }
                data.push(Todo);

                localStorage.setItem("Todo", JSON.stringify(data));
                //Reload the Page
                location.reload();
            }
        },
        //Method to Read Data from the local Storage
        todoloaddata: function () {
            var datacount = localStorage.length;
            if (datacount > 0) {





                var render = "<table id='myTable2' border='1'>";
                render += "<tr><th></th><th onclick='sortTable(0)'>To Do Name</th><th>Start Date</th><th>Due Date</th><th>Categories</th><th>isPublic</th><th>Description</th><th></th></tr>";

                var todo = localStorage.getItem('Todo'); //Get Data from Key
                if (todo != null) {
                    var data = JSON.parse(todo);

                    for (i = 0; i < data.length; i++) {


                        //Parse the Data back into the object


                        render += "<tr><td> <input type='checkbox' id='chk" + i + "' />";

                        render += "<td>" + data[i].toDoname + " </td>";
                        render += "<td>" + data[i].startDate + " </td>";
                        render += "<td>" + data[i].dueDate + " </td>";
                        render += "<td>" + data[i].categories + " </td>";
                        render += "<td>" + data[i].ispublic + " </td>";
                        render += "<td>" + data[i].description + " </td>";


                        render += "<td>" +
                            "<input type='button' id='edit_button" + i + "' value='Edit' class='edit' onclick='edit_row(" + i + ")'>  </td>  </tr>";
                    }
                } render += "<tr><td><input type='button' id='delete' value='delete all' class='edit' onclick='DeleteTodo()'> </td></tr>";

                render += "</table>";
                dvcontainer.innerHTML = render;
            }
        },
        //Method to Clear Storage
        clearstorage: function () {
            var storagecount = localStorage.length; //Get the Storage Count
            if (storagecount > 0) {
                for (i = 0; i < storagecount; i++) {
                    localStorage.clear();
                }
            }
            window.location.reload();
        }

    };
    //Save object into the localstorage
    var btnsave = document.getElementById('btnsave');
    btnsave.addEventListener('click', applogic.saveitem, false);
    //Clear all UI Elements
    var btnclear = document.getElementById('btnclear');
    btnclear.addEventListener('click', applogic.clearuielements, false);
    //Clear LocalStorage
    var btnclearstorage = document.getElementById('btnclearstorage');
    //btnclearstorage.addEventListener('click', applogic.clearstorage, false);
    var btnadd = document.getElementById('btnadd');
    btnadd.addEventListener('click', applogic.saveTodoitem, false);
    //On Load of window load data from local storage
    window.onload = function () {
        applogic.loadProfile();
        applogic.todoloaddata();
    };
})();