function doTheStuff(){

let Superlative = document.getElementById("superlative").value;

let Animal = document.getElementById("animal").value;

let Food = document.getElementById("food").value;

let Color = document.getElementById("color").value;

let Color2 = document.getElementById("color2").value;

let Number = document.getElementById("number").value;

let Number2 = document.getElementById("number2").value;

document.getElementById("madLib").innerHTML= "<p>Mr.Duck is the " + Superlative + " " + Animal + ". He loves to eat " + Food + ". Mr.Duck is " + Color + "and " + Color2 + ". He has " + Number + " inch legs with " + Number2 + " inch arms. He hates humans that use him as therapy duck.</p>";
}