// Variables to store data

var button = document.getElementById("newGameBtn");

var animals = [
    "zebra", 
    "lion", 
    "giraffe", 
    "elephant", 
    "rhino"
];



var lives = 5;
var guess;
var answer = [];
var wrongLetters = [];
var correctLetters = [];


/*
alert(answer.join(" "));

*/

//===========================================================================================
// Page text

document.getElementById("livesRemaining").innerHTML = "you have " + lives + " tries remaining";

document.getElementById("wrongLetters").innerHTML = [];

//===========================================================================================
// Functions to call on variables

button.onclick = function() {
    var element = document.getElementById("wordToGuess");
    element.innerHTML = (animals[Math.floor(Math.random() * animals.length)]);
};

for (var i = 0; i < animals.length; i++) {
    answer[i] = "_ ";
}

/* My first working Javascript code!
button.onclick = function() {
    alert(animals[Math.floor(Math.random() * animals.length)]);
};
*/

//===========================================================================================
// Sh!t I dont know what to do with

/*
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
onkeyup = function(event) {
    var userGuess = event.key;
    if {
        lives--;
    }
    else {
l       lives--;
    }
}
*/

/*
document.onkeyup = function(event) {

    var guess = event.key;
    var zebra = ["z", "e", "b", "r", "a"];
    for (var i = 0; i < zebra.length; i++) {
        if (zebra[i].charAt(0) === "z") {
        console.log(zebra[i]);
        }
        else if (zebra[i].charAt(1) === "e") {
        console.log(zebra[i]);
        }
        else if (zebra[i].charAt(2) === "b") {
        console.log(zebra[i]);
        }
        else if (zebra[i].charAt(3) === "r") {
        console.log(zebra[i]);
        }
        else if (zebra[i].charAt(4) === "a") {
        console.log(zebra[i]);
        }
    }
};
*/