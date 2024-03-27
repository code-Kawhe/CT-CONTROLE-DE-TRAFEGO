const SaveCARRETA = document.getElementById("Save_COL")

SaveCARRETA.addEventListener("click", () => {

    const NOMECOL = document.getElementById("NOMECOL")
    const FCOL = document.getElementById("FCOL")

    const ca =
    {
        "NOMECOL": NOMECOL.value,
        "FCOL": FCOL.value,
    }

    const CAM_EXT = JSON.parse(localStorage.getItem("COL")) || []
    CAM_EXT.push(ca)
    console.log(CAM_EXT)
    localStorage.setItem(`COL`, [JSON.stringify(CAM_EXT)])
    
    // Limpar os campos de input
    document.getElementById("NOMECOL").value = "";
    document.getElementById("FCOL").value = "";
})
