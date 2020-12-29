function searchformatches() {
    let i = 0
    let input = document.getElementById("textIn")
    let upper = input.value.toUpperCase()
    let list = document.getElementById("Namelist")
    let listitems = list.childNodes
    if (upper.length > 0) {
        for (i = 0; i < listitems.length; i++) {
            let currplace = listitems[i].innerHTML
            if (currplace != undefined) {
                if (currplace.toUpperCase().indexOf(upper) == -1) {
                    listitems[i].style.visibility = "hidden"
                } else {
                    listitems[i].style.visibility = "visible"
                }

            }
        }
    } else {
        for(let j = 0; j < listitems.length; j++) {
            let currpplace = listitems[j]
            currpplace.style.visibility = "hidden"
        }
    }
}
selecinterval = setInterval(function showselec() {
    searchformatches()
}, 1000)