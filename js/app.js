



// Get and set max
let max = document.querySelector("#oneRepMax").value;

function setMax() {
   	let max = document.querySelector("#oneRepMax").value;
    var repOuts = document.getElementsByClassName("repOut");
    for (var x = 0; x < repOuts.length; x++) {
      repOuts[x].innerHTML = max;
    }
    // document.getElementById("repOut").innerHTML = max;

    let ninetyPerc = max*.90,
    eightyPerc = max*.80,
    seventyPerc = max*.70,
    sixtyPerc = max*.60,
    fiftyPerc = max*.50,
    fortyPerc = max*.40;
    document.getElementById("ninetyPerc").innerHTML = ninetyPerc;
    document.getElementById("eightyPerc").innerHTML = eightyPerc;
    document.getElementById("seventyPerc").innerHTML = seventyPerc;
    document.getElementById("sixtyPerc").innerHTML = sixtyPerc;
    document.getElementById("fiftyPerc").innerHTML = fiftyPerc;
    document.getElementById("fortyPerc").innerHTML = fortyPerc;
}

//Get and set Goals

let reps,
    rest;

function setStrength(){
    document.getElementById("strengthCalc").style.display="none";
    document.getElementById("strengthCalc").innerHTML = "Strength";
    document.getElementById("strengthCalc").style.display="inline-block";
    reps="1-6";
    rest="3-5 min";
    var writeReps = document.getElementsByClassName("reps");
    var writeRest = document.getElementsByClassName("rest");
    for (var c = 0; c < writeReps.length; c++) {
        writeReps[c].innerHTML = reps;
        writeRest[c].innerHTML = rest;
    }
    document.getElementById("rowhundred").style.backgroundColor = "#00ff00";
    document.getElementById("rowninety").style.backgroundColor = "#00ff00";
    document.getElementById("roweighty").style.backgroundColor = "#61dd61";
    document.getElementById("rowseventy").style.backgroundColor = "#61dd61";
    document.getElementById("rowsixty").style.backgroundColor = "#ffff4d";
    document.getElementById("rowfifty").style.backgroundColor = "#ff3333";
    document.getElementById("rowforty").style.backgroundColor = "#ff3333";

	
}

function setMass(){
    document.getElementById("strengthCalc").style.display="none";
    document.getElementById("strengthCalc").innerHTML = "Mass";
     document.getElementById("strengthCalc").style.display="inline-block";
     reps="7-10";
     rest="1-2 min"
    var writeReps = document.getElementsByClassName("reps");
    var writeRest = document.getElementsByClassName("rest");
    for (var c = 0; c < writeReps.length; c++) {
        writeReps[c].innerHTML = reps;
        writeRest[c].innerHTML = rest;
    }
    document.getElementById("rowhundred").style.backgroundColor = "#ffff4d";
    document.getElementById("rowninety").style.backgroundColor = "#99ff99";
    document.getElementById("roweighty").style.backgroundColor = "#99ff99";
    document.getElementById("rowseventy").style.backgroundColor = "#00ff00";
    document.getElementById("rowsixty").style.backgroundColor = "#ffff4d";
    document.getElementById("rowfifty").style.backgroundColor = "#ff3333";
    document.getElementById("rowforty").style.backgroundColor = "#ff3333";
}


function setBurn(){
    document.getElementById("strengthCalc").style.display="none";
    document.getElementById("strengthCalc").innerHTML = "Burn Fat";
     document.getElementById("strengthCalc").style.display="inline-block";
     reps="10+"
     rest="none-30s"
    var writeReps = document.getElementsByClassName("reps");
    var writeRest = document.getElementsByClassName("rest");
    for (var c = 0; c < writeReps.length; c++) {
        writeReps[c].innerHTML = reps;
        writeRest[c].innerHTML = rest;
    }
    document.getElementById("rowhundred").style.backgroundColor = "#ff3333";
    document.getElementById("rowninety").style.backgroundColor = "#ff3333";
    document.getElementById("roweighty").style.backgroundColor = "#99ff99";
    document.getElementById("rowseventy").style.backgroundColor = "#00ff00";
    document.getElementById("rowsixty").style.backgroundColor = "#99ff99";
    document.getElementById("rowfifty").style.backgroundColor = "#ffff4d";
    document.getElementById("rowforty").style.backgroundColor = "#ff3333";
}