
const btnhome = document.getElementById("home")
const btncad = document.getElementById("cad")
const btnent = document.getElementById("ent")
const btnsai = document.getElementById("sai")
const btnrelat = document.getElementById("relat")

btnhome.addEventListener("click", () =>{
    window.location.href = "/"
})
btncad.addEventListener("click", () =>{
    window.location.href = "/cadastro"
})
btnent.addEventListener("click", () =>{
    window.location.href = "/entradas"
})
btnsai.addEventListener("click", () =>{
    window.location.href = "/saidas"
})
btnrelat.addEventListener("click", () =>{
    window.location.href = "/relatorios"
})