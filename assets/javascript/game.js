var animals = ["Zebra", "Lion", "Giraffe", "Elephant", "Rhino"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

var animals = animals[Math.floor(Math.random() * words.length)];

var answer = [];
for (var i =0; i < word.length; i++) {
    answer[i] = "_";
}

var guess = ["_", "_", "_", "_", "_"];
    document.getElementById().innerHTML



var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

          // Create geusses ul
result = function () {
    wordHolder = document.getElementById('blank');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
         guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } 
        else {
            guess.innerHTML = "_";
        }

        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

    var lives ;             // Lives

  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " tries left";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }