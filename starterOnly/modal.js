function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Selection de l'icone 
  var icon = document.querySelector('.icon');

  // Ajout de l'event listener
  icon.addEventListener('click', function() {
      editNav();
  });


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeX = document.querySelectorAll(".close");
const buttonSubmit = document.querySelectorAll(".btn-submit");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeX.forEach((btn) => btn.addEventListener("click", closeModal));
buttonSubmit.forEach((btn)=>btn.addEventListener("click",validate))
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}



function validate(event) {
  event.preventDefault();
  // Regex pour vérifier si le champ nom et prénom contient au moins 2 lettres
const nomRegex = /^[a-zA-ZÀ-ÿ\s']{2,}$/;

// Regex  champ email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regex date
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// Regex nombre de tournoi
const numberRegex = /^\d+$/;
  // Selection des valeurs dans le DOM
  const inputFirst = document.getElementById("first").value;
  const inputLast = document.getElementById("last").value;
  const inputEmail = document.getElementById("email").value;
  const inputDate = document.getElementById("birthdate").value;
  const inputQuantity = document.getElementById("quantity").value;
  const inputOptions = document.querySelectorAll(
    'input[name="location"]:checked'
  );
  const checkboxCondition = document.getElementById("checkbox1");
  // Selection pour les erreurs
  const errorFirst = document.querySelector(".firstname");
  const errorLast = document.querySelector(".lastname");
  const errorMail = document.querySelector(".mail");
  const errorBirthDate = document.querySelector(".birthdate");
  const errorQuantity = document.querySelector(".quantity");
  const errorOption = document.querySelector(".option");
  const errorCondition = document.querySelector(".condition");

  let isValid = true;
  //Vérification du prénom
  if (!nomRegex.test(inputFirst)) {
    errorFirst.style.display = "block";
    document.getElementById("first").style.border = "3px solid red";
    isValid = false;
  } else {
    errorFirst.style.display = "none";
    document.getElementById("first").style.border = "0px";
  }
  // Vérification du nom
  if (!nomRegex.test(inputLast)) {
    errorLast.style.display = "block";
    document.getElementById("last").style.border = "3px solid red";
    isValid = false;
  } else {
    errorLast.style.display = "none";
    document.getElementById("last").style.border = "0px";
  }
  //Vérification de la date au bon format
  if (!dateRegex.test(inputDate)) {
    errorBirthDate.style.display = "block";
    document.getElementById("birthdate").style.border = "3px solid red";
    isValid = false;
  } else {
    errorBirthDate.style.display = "none";
    document.getElementById("birthdate").style.border = "0px";
  }
  //Vérication du mail
  if (!emailRegex.test(inputEmail)) {
    errorMail.style.display = "block";
    document.getElementById("email").style.border = "3px solid red";
    isValid = false;
  } else {
    errorMail.style.display = "none";
    document.getElementById("email").style.border = "0px";
  }
  if (!numberRegex.test(inputQuantity)) {
    errorQuantity.style.display = "block";
    document.getElementById("quantity").style.border = "3px solid red";
    isValid = false;
  } else {
    errorQuantity.style.display = "none";
    document.getElementById("quantity").style.border = "0px";
  }
  //Vérification qu'au moins une case est cochée
  if (inputOptions.length === 0) {
    errorOption.style.display = "block";
    isValid = false;
  } else {
    errorOption.style.display = "none";
  }
  //Vérification d'acceptation des conditions d'utilisation
  if (!checkboxCondition.checked) {
    errorCondition.style.display = "block";
    isValid = false;
  } else {
    errorCondition.style.display = "none";
  }
  // Apparation du message apres inscription
  if (isValid) {
    document.querySelector('.modal-body').style.display = 'none';
    document.getElementById("sucessModal").style.display = "block";
  }

}
const sucessClose=document.querySelectorAll('.btn-success')
sucessClose.forEach((btn)=>btn.addEventListener("click",closeSucessModal))
function closeSucessModal() {
  document.querySelector('.bground').style.display = 'none';
  location.reload()
}
