const SaveCARRETA = document.getElementById("Save_CARRETA")

SaveCARRETA.addEventListener("click", () => {

    const NCa = document.getElementById("NCa")
    const MCa = document.getElementById("MCa")
    const ModCa = document.getElementById("ModCa")
    const PCa = document.getElementById("PCa")

    const MNCa = document.getElementById("MNCa")
    const MMCa = document.getElementById("MMCa")
    const MModCa = document.getElementById("MModCa")
    const MPCa = document.getElementById("MPCa")
    const MMPA = document.getElementById("MMPA")

    const ca =
    {
        "CA_N": NCa.value,
        "CA_marca": MCa.value,
        "CA_modelo": ModCa.value,
        "CA_placc": PCa.value,
        "CR_N": MNCa.value,
        "CR_marca": MMCa.value,
        "CR_modelo": MModCa.value,
        "CR_placa": MPCa.value,
        "CR_carga": MMPA.value,
    }

    const CAM_EXT = JSON.parse(localStorage.getItem("CAM")) || []
    CAM_EXT.push(ca)
    console.log(CAM_EXT)
    localStorage.setItem(`CAM`, [JSON.stringify(CAM_EXT)])
    
    // Limpar os campos de input
    document.getElementById("NCa").value = "";
    document.getElementById("MCa").value = "";
    document.getElementById("ModCa").value = "";
    document.getElementById("PCa").value = "";
    document.getElementById("MNCa").value = "";
    document.getElementById("MMCa").value = "";
    document.getElementById("MModCa").value = "";
    document.getElementById("MPCa").value = "";
    document.getElementById("MMPA").value = "";
})
