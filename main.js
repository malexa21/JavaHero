const da = document.getElementById("daButton");
const nu = document.getElementById("nuButton");
const mesajDa = document.getElementById("mesajDa");
const mesajNu = document.getElementById("mesajNu");

const sabie = document.getElementById("sabie");
const arc = document.getElementById("arc");
const toiag = document.getElementById("toiag");
const shuriken = document.getElementById("shuriken");

sabie.style.display = "none";
arc.style.display = "none";
toiag.style.display = "none";
shuriken.style.display = "none";

const armaAleasa = document.getElementById("mesajArmaAleasa");

da.addEventListener("click" , function(){
    da.style.display = "none";
    nu.style.display = "none";
    mesajDa.innerHTML= "Incantator calatorule! Haide sa iti prezint armele pe care le poti alege!";
    sabie.style.display = "block";
    arc.style.display = "block";
    toiag.style.display = "block";
    shuriken.style.display = "block";
});

nu.addEventListener("click" , function(){
    nu.style.display = "none";
    da.style.display = "none";
    mesajNu.innerHTML= "Pe data viitoare!"
});


sabie.addEventListener("click" , function(){
    arc.style.display = "none";
    toiag.style.display = "none";
    shuriken.style.display = "none";
    armaAleasa.innerHTML = "Ah , ai ales sabia, foarte buna alegere! Pregateste-te sa infrunti cele mai netrebnice buguri si erori din lume!";
});

arc.addEventListener("click" , function(){
    sabie.style.display = "none";
    toiag.style.display = "none";
    shuriken.style.display = "none";
    armaAleasa.innerHTML = "Ah , ai ales arcul, foarte buna alegere! Pregateste-te sa infrunti cele mai netrebnice buguri si erori din lume!";
});

toiag.addEventListener("click" , function(){
    sabie.style.display = "none";
    arc.style.display = "none";
    shuriken.style.display = "none";
    armaAleasa.innerHTML = "Ah , ai ales toiagul magic, foarte buna alegere! Pregateste-te sa infrunti cele mai netrebnice buguri si erori din lume!";
});

shuriken.addEventListener("click" , function(){
    arc.style.display = "none";
    toiag.style.display = "none";
    sabie.style.display = "none";
    armaAleasa.innerHTML = "Ah , ai ales shurikenele,foarte buna alegere! Pregateste-te sa infrunti cele mai netrebnice buguri si erori din lume!";
});

