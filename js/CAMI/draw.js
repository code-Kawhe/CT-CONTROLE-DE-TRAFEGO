
const CAM_EXT = JSON.parse(localStorage.getItem("CAM")) || []
const Fdom = document.getElementById("main-CadCA")

console.log(CAM_EXT)

if (CAM_EXT !== null || CAM_EXT !== undefined || CAM_EXT.length > 0) {
    CAM_EXT.map((i) => {
        const DCa = document.createElement('div')
        DCa.classList = "Card-Ca"

        const D1 = document.createElement('div')
        D1.classList.add("Ca1")

        const img1 = document.createElement('img')
        img1.classList.add("img1")
        img1.setAttribute("src", "./icons/caminhao.png")
        img1.setAttribute("alt", "CAMINHÃO")
        const img2 = document.createElement('img')
        img2.classList.add("img2")
        img2.setAttribute("src", "./icons/carreta.png")
        img2.setAttribute("alt", "CARRETA")

        const DD1 = document.createElement('div')
        const P1 = document.createElement("p")
        P1.innerText = (`PLACA - CA: ${i.CA_placc}`)
        const P2 = document.createElement("p")
        P2.innerText = (`PLACA - CR: ${i.CR_placa}`)
        DD1.appendChild(P1)
        DD1.appendChild(P2)

        D1.appendChild(img1)
        D1.appendChild(img2)
        D1.appendChild(DD1)

        const D2 = document.createElement('div')
        D2.classList.add("Ca2")

        const PP1 = document.createElement("p")
        PP1.innerText = (`N°: ${i.CR_N}`)

        const PP2 = document.createElement("p")
        PP2.innerText = (`CARGA TOTAL: ${i.CR_carga}`)

        D2.appendChild(PP1)
        D2.appendChild(PP2)

        const D3 = document.createElement('div')
        D3.classList.add("Ca3")

        DCa.appendChild(D1)
        DCa.appendChild(D2)
        DCa.appendChild(D3)

        Fdom.appendChild(DCa)
    })
}
