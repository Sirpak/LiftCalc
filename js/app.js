

/*let max = document.querySelector("#oneRepMax").value;

function setMax() {
   	let max = document.querySelector("#oneRepMax").value;
    document.getElementById("repOut").innerHTML = max;

    let ninetyPerc = max*.90;
    let eightyPerc = max*.80;
    let seventyPerc = max*.70;
    let sixtyPerc = max*.60;
    let fiftyPerc = max*.50;
    let fortyPerc = max*.40;
    document.getElementById("ninetyPerc").innerHTML = ninetyPerc;
    document.getElementById("eightyPerc").innerHTML = eightyPerc;
    document.getElementById("seventyPerc").innerHTML = seventyPerc;
    document.getElementById("sixtyPerc").innerHTML = sixtyPerc;
    document.getElementById("fiftyPerc").innerHTML = fiftyPerc;
    document.getElementById("fortyPerc").innerHTML = fortyPerc;
}

*/
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