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
const closeX = document.querySelectorAll(".close");

const buttonSubmit = document.querySelectorAll(".btn-submit");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeX.forEach((btn) => btn.addEventListener("click", closeModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Regex pour vérifier si le champ nom et prénom contient au moins 2 lettres
const nomRegex = /^[a-zA-ZÀ-ÿ\s']{2,}$/;
// Regex  champ email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



function validate() {
  const inputFirst = document.getElementById("first").value;
  const inputLast = document.getElementById("last").value;
  const inputEmail = document.getElementById("email").value;
  const inputDate = document.getElementById("birthdate").value;
  const inputQuantity = document.getElementById("quantity").value;
  const errorFirst = document.querySelector(".firstname");
  const errorLast = document.querySelector(".lastname");
  const errorMail = document.querySelector(".mail");
  const errorBirthDate = document.querySelector(".birthdate");
  let boolean = true;
  if (!nomRegex.test(inputFirst)) {
    errorFirst.style.display = "block";
    document.getElementById("first").style.border = "1px solid red";
    boolean = false;
  } else {
    errorFirst.style.display = "none";
    document.getElementById("first").style.border = "0px";
  }

  if (!nomRegex.test(inputLast)) {
    errorLast.style.display = "block";
    document.getElementById("last").style.border = "1px solid red";
    boolean = false;
  } else {
    errorLast.style.display = "none";
    document.getElementById("last").style.border = "0px";
  }

  if (!emailRegex.test(inputEmail)) {
    errorMail.style.display = "block";
    document.getElementById("email").style.border = "1px solid red";
    boolean = false;
  } else {
    errorMail.style.display = "none";
    document.getElementById("email").style.border = "0px";
  }
  if ((!dateRegex.test(inputDate))) {
    errorBirthDate.style.display = "block";
    document.getElementById("birthdate").style.border = "1px solid red";
    console.log(inputDate)
    boolean = false;
  } else {
    errorBirthDate.style.display = "none";
    document.getElementById("birthdate").style.border = "0px";
  }

  return boolean;
}
