const da = document.getElementById("daButton");
const nu = document.getElementById("nuButton");
const mesajDa = document.getElementById("mesajDa");
const mesajNu = document.getElementById("mesajNu");



da.addEventListener("click" , function(){
    da.style.display = "none";
    nu.style.display = "none";
    mesajDa.innerHTML= "Incantator calatorule! Haide sa iti prezint armele pe care le poti alege!";
});

nu.addEventListener("click" , function(){
    nu.style.display = "none";
    da.style.display = "none";
    mesajNu.innerHTML= "Pe data viitoare!"
});




