var button = document.querySelectorAll(".drum");
var numberOfButtons = document.querySelectorAll(".drum").length;

console.log(numberOfButtons);

// //when we selecting all the buttons. The buttons are in the form of arrays. 
// //so we are converting them to DOM by forEach()
button.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
});


document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(event) {
    switch (event) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log("No buttons pressed.");
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout( function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
