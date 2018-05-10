var animals = ["Zebra", "Lion", "Giraffe", "Elephant", "Rhino"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

function word() {
    word.list = [
        "zebra",
        "lion",
        "giraffe",
        "elephant",
        "rhino"
    ]

    word.random = word.list[Math.floor(Math.random() * word.list.length)];
    word.wrongGuesses = [];
    word.errors = 0;
    word.correctGuesses = [];
    for (var i = 0; i < word.random.length; i++) {
        word.correctGuesses[i] = (false);
    }
}

function alphabet() {
    letters = "abcdefghijklmnopqrstuvwxyz"
}

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