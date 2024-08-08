const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "eRROR";
    }
}

function playSound() {
    var sound = document.getElementById('clickSound');
    sound.currentTime = 0;
    sound.play();
}

function playSound2() {
    var sound = document.getElementById('clickSound2');
    sound.currentTime = 0;
    sound.play();
}

function playSound3() {
    var sound = document.getElementById('clickSound3');
    sound.currentTime = 0;
    sound.play();
}