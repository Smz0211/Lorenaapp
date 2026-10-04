var nome = localStorage.getItem("username") || "";

function fazerLogin(){
    if(document.getElementById("txtUser").value != ""){
        nome = document.getElementById("txtUser").value;
        localStorage.setItem("username", nome);
        window.location.href = "index.html";
    }
    else{
        console.log("Nome inválido");
    }
}

document.getElementById("btnLogin").addEventListener("click", fazerLogin);