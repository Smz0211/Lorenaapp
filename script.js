var nome = localStorage.getItem("username") || "";

var bosta = localStorage.getItem("bosta") || "";

var qtd = localStorage.getItem("qtdCagadas") || 0;

function load(){
    if(nome === ""){
        window.location.href = "entrar.html";
    }
}

bosta = "";

for(var i = 0; i < qtd; i ++){
    bosta += "💩";
    localStorage.setItem("bosta", bosta);
    document.getElementById("bosta").textContent = bosta;
}


document.addEventListener("DOMContentLoaded", load);

document.getElementById("txt").textContent = nome+", Você soltou o barro um total de "+qtd+" vezes";

function contabiliza(){
    new Audio("peido.mp3").play();
    qtd++; 
    document.getElementById('txt').textContent = nome+', Você soltou o barro um total de '+qtd+' vezes'
    localStorage.setItem("qtdCagadas", qtd);

    bosta += "💩";
    localStorage.setItem("bosta", bosta);
    document.getElementById("bosta").textContent = bosta;
}

function descarga(){
    new Audio("descarga.mp3").play();
    localStorage.setItem("qtdCagadas", 0);
    qtd = 0;
    document.getElementById('txt').textContent = nome+', Você soltou o barro um total de '+qtd+' vezes';
    
    bosta = "";
    localStorage.setItem("bosta", bosta);
    document.getElementById("bosta").textContent = bosta;
}


document.getElementById("btnCont").addEventListener("click", contabiliza);
document.getElementById("btnDescarga").addEventListener("click", descarga)