
const CAM_EXT = JSON.parse(localStorage.getItem("COL")) || []
const Fdom = document.getElementById("main-CadCOL")

console.log(CAM_EXT)

    CAM_EXT.map((i) => {
        const DCa = document.createElement('div')
        DCa.classList = "Card-CO"
        const P1 = document.createElement("p")
        P1.innerText = (`NOME: ${i.NOMECOL}`)
        const P2 = document.createElement("p")
        P2.innerText = (`FUNÇÃO: ${i.FCOL}`)

        DCa.appendChild(P1)
        DCa.appendChild(P2)
        Fdom.appendChild(DCa)
    })