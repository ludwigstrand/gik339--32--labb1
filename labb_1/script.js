
//Uppgift 4 - Skapa variabler

//   --- Checkboxen ---
const checkbox = document.querySelector(".checkbox");

//   --- Textfälten ---
const allTextfields = document.querySelectorAll('.textfield');

//   --- Knappen ---
const myButton = document.getElementById('myButton');

//   --- Diven ---
const divElement = document.getElementsByClassName('myClass');

//Uppgift 5 - Skapa en fördefinierad funktion

function updateDivText(e){
    console.log(e.target);
    if(e.target.getAttribute('name') == "content"){
        divElement[0].textContent = allTextfields[1].value;
    }
}

//Uppgift 6 - Koppla eventlyssnare

//en anonym funktion som hämtar färgen från första textfältet
checkbox.addEventListener('change', function() {
    if (this.checked) {
        divElement[0].style.backgroundColor = allTextfields[0].value;
    } else {
        divElement[0].style.backgroundColor = 'white';
    }
});

allTextfields[0].addEventListener('keyup', updateDivText);
allTextfields[1].addEventListener('keyup', updateDivText);

//Vid klick på knappen ska div-elementet försvinna
myButton.addEventListener('click', function(e) {
    e.preventDefault();
    divElement[0].remove();
});