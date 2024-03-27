function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeX = document.querySelectorAll(".close")
const inputFirst = document.getElementById("first");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputDate = document.getElementById("birthdate");
const inputQuantity=document.getElementById("quantity");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeX.forEach((btn)=>btn.addEventListener("click",closeModal))
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form 
function closeModal(){
modalbg.style.display="none";
inputDate.value=" ";
inputEmail.value=" ";
inputLast.value=" ";
inputFirst.value=" ";
inputQuantity.value=" ";

}