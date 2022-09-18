function encryptar(){
    var text = document.getElementById("inputText").value.toLowerCase();
    // es para afectar minusculas como mayusculas 
    var txtCypher = text.replace(/e/igm, "enter");
    var txtCypher = txtCypher.replace(/o/igm, "ober");
    var txtCypher = txtCypher.replace(/i/igm, "imes");
    var txtCypher = txtCypher.replace(/a/igm, "ai");
    var txtCypher = txtCypher.replace(/u/igm, "ufat");
    //Aca inicia la encryptacion
        document.getElementById("imgDerecha").style.display = "none";
        document.getElementById("texto").style.display= "none";
        document.getElementById("imgDerecha").innerHTML = "txtCypher";
        document.getElementById("copiar").style = "show";
        document.getElementById("copiar").style.display = "inherint";
    
}
function desencryptar(){
    var text = document.getElementById("inputText").value.toLowerCase();
    // es para afectar minusculas como mayusculas 
    var txtCypher = text.replace(/enter/igm, "e");
    var txtCypher = txtCypher.replace(/ober/igm, "o");
    var txtCypher = txtCypher.replace(/imes/igm, "i");
    var txtCypher = txtCypher.replace(/ai/igm, "a");
    var txtCypher = txtCypher.replace(/ufat/igm, "u");
    //Aca inicia la encryptacion
        document.getElementById("imgDerecha").style.display = "none";
        document.getElementById("texto").style.display= "none";
        document.getElementById("imgDerecha").innerHTML = "txtCypher";
        document.getElementById("copiar").style = "show";
        document.getElementById("copiar").style.display = "inherint";
    
}
function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.ariaSelected();
    document.execCommand("copy");
    alert("Copio texto!");
}