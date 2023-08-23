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
const magiaAleasa = document.getElementById("alegeMagia");

//magiile pe care le poti alege
const rosu = document.getElementById("rosu");
const verde = document.getElementById("verde");
const curcubeu = document.getElementById("curcubeu");

//face magiile invizibile pana la alegere
rosu.style.display = "none";
verde.style.display = "none";
curcubeu.style.display = "none";

//dragon
const dragonText = document.getElementById("introducereDragon");
const dragon = document.getElementById("dragon");
const baraProgres = document.getElementById("viataDragon");
const textProgres =document.getElementById("textProgres");

dragon.style.display = "none";
baraProgres.style.display = "none";

//text introductiv

const textSalut = document.getElementById("textSalut");
const textIntroductiv = document.getElementById("textIntroducere");


//buton DA! functionalitate
da.addEventListener("click" , function(){
    da.style.display = "none";
    nu.style.display = "none";
    mesajDa.innerHTML= "Incantator calatorule! Haide sa iti prezint armele pe care le poti alege!";
    sabie.style.display = "block";
    arc.style.display = "block";
    toiag.style.display = "block";
    shuriken.style.display = "block";
});

//Buton NU! functionalitate
nu.addEventListener("click" , function(){
    nu.style.display = "none";
    da.style.display = "none";
    mesajNu.innerHTML= "Pe data viitoare!"
});

//Functionalitate arme
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


//Functie 'colecteaza arma'
colecteazaArma.addEventListener("click" , function(){
    rosu.style.display = "block";
    verde.style.display = "block";
    curcubeu.style.display = "block";
    colecteazaArma.innerHTML = "Alege-ti acum magia!"
});

//functionalitate magii
rosu.addEventListener("click" , function(){
    verde.style.display = "none";
    curcubeu.style.display = "none";
    magiaAleasa.innerHTML= "Wow , ce alegere buna! Ai alesa magia functilor!"

    //Aparitie dragon

    setTimeout(() => {
        textSalut.innerText = "RWAAAAAR";
        textIntroductiv.innerText ="*in aer apare un fum dens*";
        mesajDa.innerHTML= "Oh nu! Ce se aude?";
    },100)

    setTimeout(() => {
        sabie.style.display = "none" ;
        toiag.style.display = "none";
        arc.style.display = "none";
        shuriken.style.display = "none";
    },100)
    
    setTimeout(() => {
        armaAleasa.innerHTML = "Poate fi... nu , nu are cum";
    },1000)

    setTimeout(() => {
        colecteazaArma.innerHTML = "*thud thud thud thud*"
    }, 2000)

    setTimeout(() => {
        magiaAleasa.innerHTML = "*Calatorul isi strange bine mainile pe arma*"
        rosu.style.display = "none";
    }, 2000)

    setTimeout(() => {
        dragonText.innerHTML= "Oh nu calaorule!!! Ai intampinat o eroare giganta!"
        dragon.style.display = "block";
        baraProgres.style.display = "block";
        textProgres.innerHTML = "(apasa click pe eroare pentru a o invinge)"
    }, 3000);
    
    

});

verde.addEventListener("click" , function(){
    rosu.style.display = "none";
    curcubeu.style.display = "none";
    magiaAleasa.innerHTML= "Wow , ce alegere buna! Ai alesa magia for-urilor!"

    setTimeout(() => {
        textSalut.innerText = "RWAAAAAR";
        textIntroductiv.innerText ="*in aer apare un fum dens*";
        mesajDa.innerHTML= "Oh nu! Ce se aude?";
    },100)

    setTimeout(() => {
        sabie.style.display = "none" ;
        toiag.style.display = "none";
        arc.style.display = "none";
        shuriken.style.display = "none";
    },100)
    
    setTimeout(() => {
        armaAleasa.innerHTML = "Poate fi... nu , nu are cum";
    },1000)

    setTimeout(() => {
        colecteazaArma.innerHTML = "*thud thud thud thud*"
    }, 2000)

    setTimeout(() => {
        verde.style.display = "none";
        magiaAleasa.innerHTML = "*Calatorul isi strange bine mainile pe arma*"
    }, 2000)

    setTimeout(() => {
        dragonText.innerHTML= "Oh nu calaorule!!! Ai intampinat o eroare giganta!"
        dragon.style.display = "block";
        baraProgres.style.display = "block";
        textProgres.innerHTML = "(apasa click pe eroare pentru a o invinge)"
    }, 3000); 

});

curcubeu.addEventListener("click" , function(){
    verde.style.display = "none";
    rosu.style.display = "none";
    magiaAleasa.innerHTML= "Wow , ce alegere buna! Ai alesa magia DOM-ului!"

    setTimeout(() => {
        textSalut.innerText = "RWAAAAAR";
        textIntroductiv.innerText ="*in aer apare un fum dens*";
        mesajDa.innerHTML= "Oh nu! Ce se aude?";
    },100)

    setTimeout(() => {
        sabie.style.display = "none" ;
        toiag.style.display = "none";
        arc.style.display = "none";
        shuriken.style.display = "none";
    },100)
    
    setTimeout(() => {
        armaAleasa.innerHTML = "Poate fi... nu , nu are cum";
    },1000)

    setTimeout(() => {
        colecteazaArma.innerHTML = "*thud thud thud thud*"
    }, 2000)

    setTimeout(() => {
        magiaAleasa.innerHTML = "*Calatorul isi strange bine mainile pe arma*"
        curcubeu.style.display = "none";
    }, 2000)

    setTimeout(() => {
        dragonText.innerHTML= "Oh nu calaorule!!! Ai intampinat o eroare giganta!"
        dragon.style.display = "block";
        baraProgres.style.display = "block";
        textProgres.innerHTML = "(apasa click pe eroare pentru a o invinge)"
    }, 3000); 

});


