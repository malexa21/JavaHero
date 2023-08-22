const da = document.getElementById("daButton");
const nu = document.getElementById("nuButton");
const mesajDa = document.getElementById("mesajDa");
const mesajNu = document.getElementById("mesajNu");

function afiseazaMsjDa (){
    mesajDa.classList.remove("hide");
}

function afiseazaMsjNu (){
    mesajNu.classList.remove("hide");
}

da.addEventListener("click" , afiseazaMsjDa);
nu.addEventListener("click" , afiseazaMsjNu);




