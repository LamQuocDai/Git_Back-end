// Single element selector
/*
console.log(document.getElementById("my_form"));
console.log(document.querySelector(".container"));              
*/

// Multiple element selector
/*
console.log(document.querySelectorAll(".item"));
console.log("==============================================");
console.log(document.getElementsByClassName("item"));
console.log("==============================================");
console.log(document.getElementsByTagName("li"));
*/

// Looping through DOM
/*
const items = document.querySelectorAll(".item");
items.forEach(function(item){
    console.log(item);
});
*/

// Remove element
/*
const ul = document.querySelector(".items");
ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
*/

// Events
/*
const btn = document.querySelector(".btn");
btn.style.background = "red";
btn.addEventListener('click', (e) => {
    e.preventDefault(); // if it is a form, it will prevent the form from submitting
    console.log(e.target); // the target of the event
    document.querySelector("#my_form").style.background = "#ccc"; change the background color
    document.querySelector("body").classList.add("bg-dark"); add a class

});
*/

const my_form = document.querySelector("#my_form");
const nameInput = document.querySelector(".input_name");  
const emailInput = document.querySelector(".input_email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

my_form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(nameInput.value === "" || emailInput.value === "")
{
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
 
}else{
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChild(li);

    //reset fields
    nameInput.value = "";
    emailInput.value = "";
}});

