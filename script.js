const scriptURL = 'https://script.google.com/macros/s/AKfycbxAEye52--DibkrDtnrMiEfxRObQwDSp5bBZtEyHxxrdYZvBbihJv5UA-z8cDulHq2v/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Details Submitted"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})


var a = document.getElementById("menu");
var b = document.querySelector(".sidebar");
function menuopen(){
    b.style.display = "block";   
}
function menuclose(){
    b.style.display = "none"; 
}

let btn = document.querySelector(".button");
let inputs  = document.querySelectorAll("input");
btn.addEventListener('click',()=>{
    inputs.forEach(input => input.value = "");
});

