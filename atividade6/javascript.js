const legk9 = [
    "Lucas Casanova bebê",
    "Lucas Casanova adolescente",
    "Lucas Casanova atualmente"
]

const legtadeu = [
    "Minha primeira palminha",
    "Primeiro acampamento suspenso",
    "Lucas Tadeu atualmente junto do cão policial"
]

const imgk9 = [
    "https://cdn.discordapp.com/attachments/842847011068968963/842847918695907368/k9bb.jpg",
    "https://cdn.discordapp.com/attachments/842847011068968963/842869907149553664/k9crianca.jpg",
    "https://cdn.discordapp.com/attachments/842847011068968963/842847107786080296/k9agr.jpg"
]

const imgtadeu = [
    "https://cdn.discordapp.com/attachments/842847011068968963/842847989160738816/pistolabb.jpg",
    "https://cdn.discordapp.com/attachments/842847011068968963/842848047112126494/pistolacrianca.jpg",
    "https://cdn.discordapp.com/attachments/842847011068968963/842848027965390899/pistolaagr.jpg"
]


var current = 0;

function mod(n, m){
    return ((n%m)+m)%m;
}

function movek9(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current - 1, legk9.length);
    frame.style.backgroundImage="url('"+imgk9[current]+"')";
    description.innerHTML = legk9[current];
}

function nextk9(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current + 1, legk9.length);
    frame.style.backgroundImage="url('"+imgk9[current]+"')";
    description.innerHTML = legk9[current];
}

function movetadeu(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current - 1, legtadeu.length);
    frame.style.backgroundImage="url('"+imgtadeu[current]+"')";
    description.innerHTML = legtadeu[current];
}

function nexttadeu(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current + 1, legtadeu.length);
    frame.style.backgroundImage="url('"+imgtadeu[current]+"')";
    description.innerHTML = legtadeu[current];
}

var classCurrent=0;
function currentClass(){
    if (classCurrent ==0){
        addClass();
        classCurrent =1;
    } else{
        removeClass();
        classCurrent =0;
    }
}
function addClass(){
    const array = document.getElementsByClassName("frame");
    for (var i = 0; i < array.length; i++){
        array[i].classList.add("class2");
    }
}

function removeClass(){
    const array = document.getElementsByClassName("frame");
    for (var i = 0; i < array.length; i++){
        array[i].classList.remove("class2");
    }
}