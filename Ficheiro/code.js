var On = true;

function TurnOn(){
    document.getElementById("Green").style.filter = "grayscale(0%)"
    document.getElementById("Yellow").style.filter = "grayscale(100%)"
    document.getElementById("Red").style.filter = "grayscale(100%)"
    On = true;
}
function TurnGreen(){
    if (On == true){
        document.getElementById("Green").style.filter = "grayscale(0%)"
        document.getElementById("Yellow").style.filter = "grayscale(100%)"
        document.getElementById("Red").style.filter = "grayscale(100%)"
    }
    
}
function TurnRed(){
    if (On == true){
        document.getElementById("Green").style.filter = "grayscale(100%)"
        document.getElementById("Yellow").style.filter = "grayscale(100%)"
        document.getElementById("Red").style.filter = "grayscale(0%)"
    }
}
function TurnYellow(){
    if (On == true){
        document.getElementById("Green").style.filter = "grayscale(100%)"
        document.getElementById("Yellow").style.filter = "grayscale(0%)"
        document.getElementById("Red").style.filter = "grayscale(100%)"
    }
}
function TurnOff(){
    if (On == true){
        document.getElementById("Green").style.filter = "grayscale(100%)"
        document.getElementById("Yellow").style.filter = "grayscale(100%)"
        document.getElementById("Red").style.filter = "grayscale(100%)"
        On = false
    }
}