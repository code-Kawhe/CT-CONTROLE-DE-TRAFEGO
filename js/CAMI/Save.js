
const SaveCARRETA = document.getElementById("Save_CARRETA")

const NCa = document.getElementById("NCa")
const MCa = document.getElementById("MCa")
const ModCa = document.getElementById("ModCa")
const PCa = document.getElementById("PCa")

const MNCa = document.getElementById("MNCa")
const MMCa = document.getElementById("MMCa")
const MModCa = document.getElementById("MModCa")
const MPCa = document.getElementById("MPCa")

const ca =
{
    "CA_N": NCa.value,
    "CA_marca": MCa.value,
    "CA_modelo": ModCa.value,
    "CA_placc": PCa.value,
    "CR_N": MNCa.value,
    "CR_marca": MMCa.value,
    "CR_modelo": MModCa.value,
    "CR_placc": MPCa.value,
}


console.log(ca)

SaveCARRETA.addEventListener("click", () => {

    localStorage.setItem(`CA`, JSON.stringify(ca));
})