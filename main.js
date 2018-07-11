function switchLLogSignup(evt, SwitchPage) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(SwitchPage).style.display = "block";
    evt.currentTarget.className += " active";
}

let handleLoginClick = function loginFunction(form) {
    console.log(form.email.value)
    console.log(form.password.value)
    if (form.email.value === 'purity@gmail.com' && form.password.value === '123456') {
        window.location = 'shoppinglistdashboard.html'
    }
    else {
        alert("wrong username or password")
    }
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// Create a "close" button and append it to each list item
var myShoppinglist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myShoppinglist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myShoppinglist[i].appendChild(span);
}

// Delete the current list item on clicking the "close" button.
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
// Create a new list item when clicking on the "Add" button
function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    let currentList = localStorage.getItem('shoppingList1')
    if (currentList) {
        let listObj = JSON.parse(currentList)
        listObj.items.push(inputValue)
        localStorage.setItem('shoppingList1', JSON.stringify(listObj))
    }
    else {
        let listObj = {
            name: "shoppingList1",
            items: [
                inputValue
            ]
        }
        localStorage.setItem('shoppingList1', JSON.stringify(listObj))
    }
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Provide Item Name");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}//Redirect to back to sign in page on clicking logout
function logout() {
    window.location = 'index.html'
}