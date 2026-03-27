let popup = document.getElementById("popup");
let checkbox = document.getElementById("checkbox");
let turnred = document.getElementById("turnred");

function unSelect() {
  popup.classList.add("open-popup");
  checkbox.checked = false;
  turnred.classList.add("red-text")
 
 
}
 
function closePopup() {
  popup.classList.remove("open-popup") 
  
}
