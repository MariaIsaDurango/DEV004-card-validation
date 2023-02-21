import validator from "./validator.js";
//console.log(validator);

// valor input
const crediCard = document.getElementById("crediCard");
const btncrediCard = document.getElementById("click");
btncrediCard.addEventListener("click", validate);

function validate() {
  // console.log("provando", isNaN(crediCard.value));
  //identifica valor ingresado en input sea caracter numerico
  if (isNaN(crediCard.value)) {
    document.getElementById("validate").innerHTML =
      "ingresar solo datos numericos";
    return;
  } else {
    validator.isValid(crediCard);
  }
}
