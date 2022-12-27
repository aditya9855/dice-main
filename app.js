
var hidden = false;
document.getElementById("btn1").style.visibility = ("hidden");
let selectedValue = null;

// update


function shuffle() {
    const img = document.getElementById("img");
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    img.setAttribute("src", `${randomNumber}.png`);
    
    let mgf = document.getElementById('scce').value || selectedValue;    
    document.getElementById("btn").style.visibility = ("hidden");

    console.log(mgf)

    if (!mgf) {
        document.getElementById("scce").innerHTML = ('Please Select!');
        document.getElementById('score').innerHTML = 0;
        document.getElementById("btn1").style.visibility = ("visible");
    } else if(mgf && randomNumber == mgf){
        document.getElementById('message8').innerHTML = (' YOU WIN! ');
        document.getElementById('score').innerHTML = 100;
        document.getElementById("btn1").style.visibility = ("visible");
    } else{
        document.getElementById('message8').innerHTML = (' YOU LOOSE ');
        document.getElementById('score').innerHTML = 0;
        document.getElementById("btn1").style.visibility = ("visible");
        
    }
}

function guessNumber(){
    setTimeout(shuffle, 3000);
    const img = document.getElementById("img");
    img.setAttribute("src", "dice-anim.gif");
    document.getElementById("btn1").style.visibility = ("hidden");
    let mfg2 = document.getElementById("btn2").style.visibility = ('hidden');
}

document.getElementById("btn1").onclick = function replay(){
    
    window.location.reload();
}

document.getElementById("btn2").onclick = function(){
    
    let selectField = document.getElementById("cars");
    var selectedOption = selectField.options.selectedIndex;
    var selectValue = selectField.options[selectedOption];
    console.log(selectValue.innerHTML);
    selectedValue = selectValue.innerHTML
    document.getElementById("scce").innerHTML = selectedValue;
    
}


