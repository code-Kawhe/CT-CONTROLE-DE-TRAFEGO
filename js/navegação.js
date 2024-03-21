//MAIN
const btnhome = document.getElementById("home")
const btncad = document.getElementById("cad")
const btnent = document.getElementById("ent")
const btnsai = document.getElementById("sai")
const btnrelat = document.getElementById("relat")

//CADASTROS
const btnCadCa = document.getElementById("Cad-Ca")
const btnCadIn = document.getElementById("Cad-In")
const btnCadLoc = document.getElementById("Cad-Loc")
const btnCadCola = document.getElementById("Cad-Cola")

//MAIN
btnhome.addEventListener("click", () =>{
    window.location.href = "/"
})
btncad.addEventListener("click", () =>{
    window.location.href = "/Cad-caminhoes.html"
})
btnent.addEventListener("click", () =>{
    window.location.href = "/entradas.html"
})
btnsai.addEventListener("click", () =>{
    window.location.href = "/saidas.html"
})
btnrelat.addEventListener("click", () =>{
    window.location.href = "/relatorios.html"
})

//CADASTROS
btnCadCa.addEventListener("click", () =>{
    window.location.href = "/Cad-caminhoes.html"
})
btnCadIn.addEventListener("click", () =>{
    window.location.href = "/Cad-insumos.html"
})
btnCadLoc.addEventListener("click", () =>{
    window.location.href = "/Cad-local.html"
})
btnCadCola.addEventListener("click", () =>{
    window.location.href = "/Cad-colaboradores.html"
})