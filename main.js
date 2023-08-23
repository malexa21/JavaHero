//butoane principale
const da = document.getElementById("daButton");
const nu = document.getElementById("nuButton");
const mesajDa = document.getElementById("mesajDa");
const mesajNu = document.getElementById("mesajNu");

//arme
const sabie = document.getElementById("sabie");
const arc = document.getElementById("arc");
const toiag = document.getElementById("toiag");
const shuriken = document.getElementById("shuriken");

//face armele sa fie invizibile la inceput
sabie.style.display = "none";
arc.style.display = "none";
toiag.style.display = "none";
shuriken.style.display = "none";


//alege armele / magiile pe care le folosite
const armaAleasa = document.getElementById("mesajArmaAleasa");
const colecteazaArma = document.getElementById("colecteazaArmaAleasa");

//magiile pe care le poti alege
const rosu = document.getElementById("rosu");
const verde = document.getElementById("verde");
const curcubeu = document.getElementById("curcubeu");

//face magiile invizibile pana la alegere
rosu.style.display = "none";
verde.style.display = "none";
curcubeu.style.display = "none";

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
    colecteazaArma.innerHTML = "Colecteaza-ti arma , calatorule!"
});

arc.addEventListener("click" , function(){
    sabie.style.display = "none";
    toiag.style.display = "none";
    shuriken.style.display = "none";
    armaAleasa.innerHTML = "Ah , ai ales arcul, foarte buna alegere! Pregateste-te sa infrunti cele mai netrebnice buguri si erori din lume!";
    colecteazaArma.innerHTML = "Colecteaza-ti arma , calatorule!"
});

toiag.addEventListener("click" , function(){
    sabie.style.display = "none";
    arc.style.display = "none";
    shuriken.style.display = "none";
    armaAleasa.innerHTML = "Ah , ai ales toiagul magic, foarte buna alegere! Pregateste-te sa infrunti cele mai netrebnice buguri si erori din lume!";
    colecteazaArma.innerHTML = "Colecteaza-ti arma , calatorule!"
});

shuriken.addEventListener("click" , function(){
    arc.style.display = "none";
    toiag.style.display = "none";
    sabie.style.display = "none";
    armaAleasa.innerHTML = "Ah , ai ales shurikenele,foarte buna alegere! Pregateste-te sa infrunti cele mai netrebnice buguri si erori din lume!";
    colecteazaArma.innerHTML = "Colecteaza-ti arma , calatorule!"
});

colecteazaArma.addEventListener("click" , function(){
    rosu.style.display = "block";
    verde.style.display = "block";
    curcubeu.style.display = "block";
})