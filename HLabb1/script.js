//Uppgift 4 - Skapa variabler

//   --- Checkboxen ---
const checkbox = document.getElementsByName('divStyle');
console.log(checkbox);
//checkbox.addEventListener('click', handleClick);
//Vid förändring i checkboxen ska div-elementet ändra bakgrundsfärg till den färg som står skriven i input-fältet med namn/id”color”.

//en annonym funktion som hämtar färgen från första textfältet

//   --- Textfälten ---
const alltextfields = document.querySelectorAll('.textfield');
console.log(alltextfields);
//for each loop, sida 10 föreläsning 2

//   --- Diven ---
const divElement = document.getElementsByClassName('myClass');
console.log(divElement);

//   --- Knappen ---
const myButton = document.getElementById('myButton');
console.log(myButton);

myButton.addEventListener('click', function(event) {
    event.preventDefault();
    divElement[0].remove();
});

//Vid klick på knappen ska div-elementet försvinna

//Uppgift 5 - Skapa en fördefinierad funktion

function handleClick(e){
    e.preventDefault();
}

//funktionsdeklaration('hello', 'world');

//function funktionsdeklaration(param1, param2){
    //När funktionen (eventlyssnaren) triggas ska avsändaren (target) skrivas ut till konsolen.
    //Om avsändaren (target) är inputfältet content, ska dess värde skrivas ut till div-elementet.

  //  console.log('Funktion: funktionsdeklaration, parametrar', param1, param2);
    //return 'Returnerar '+ param1 + ' ' + param2;
//}

//console.log(funktionsdeklaration('hej', 'då'));

//Uppgift 6 - Koppla eventlyssnare