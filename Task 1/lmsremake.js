let users = []
const unamein = document.getElementById("uname")
const pwordin = document.getElementById('pword')
const utypein = document.getElementById('utype')
const signinbutton = document.getElementById('signinbutton')
const signupbutton = document.getElementById('signupbutton')
const username = document.getElementById('user')
let curruser
let currpass
let currtype

function addclass(i, div) {
    let genclass = document.createElement('p')
    genclass.setAttribute('id','class'+i)
    genclass.innerHTML = i
    div.appendChild(genclass)

    if(currtype == 'Admin') {
        let genbutton = document.createElement('button')
        genbutton.innerHTML = 'assign'
        div.appendChild(genbutton)
    }
}

function addclasses() {
    divlist2 = document.createElement("div")
    divlist2.setAttribute("id", "div21")
    divlist2.setAttribute("class", "divhold")

    addclass('Javascript', divlist2)
    addclass('Css', divlist2)
    addclass('HTML', divlist2)
    
    document.getElementById("courseholder").appendChild(divlist2)
}

function adduser() {
    if (window.getComputedStyle(unamein).visibility === 'visible' && window.getComputedStyle(pwordin).visibility === 'visible' && window.getComputedStyle(utypein).visibility === 'visible') {
        users.push({ "uname": unamein.value, "pword": pwordin.value, "utype": utypein.value })
        console.log(users)
        unamein.value = ""
        pwordin.value = ""
        utypein.value = ""
        unamein.style.visibility = 'hidden'
        pwordin.style.visibility = 'hidden'
        utypein.style.visibility = 'hidden'
    } else {
        console.log(window.getComputedStyle(unamein).visibility)
        unamein.style.visibility = 'visible'
        pwordin.style.visibility = 'visible'
        utypein.style.visibility = 'visible'
    }

}

function signin() {
    if (window.getComputedStyle(unamein).visibility === 'visible' && window.getComputedStyle(pwordin).visibility === 'visible') {
        let signuser = unamein.value
        let signpass = pwordin.value
        console.log(signuser)
        console.log(signpass)
        for (let i = 0; i < users.length; i++) {
            if (users[i].uname == signuser) {
                if (users[i].pword == signpass) {
                    curruser = users[i].uname
                    currpass = users[i].pword
                    currtype = users[i].utype
                    username.innerHTML = curruser
                    addclasses()
                }
            }
        }
        unamein.value = ""
        pwordin.value = ""
        utypein.value = ""
        unamein.style.visibility = 'hidden'
        pwordin.style.visibility = 'hidden'
        signinbutton.style.visibility = 'hidden'
        signupbutton.style.visibility = 'hidden'
    } else {
        unamein.style.visibility = 'visible'
        pwordin.style.visibility = 'visible'
    }

}

signinbutton.addEventListener("click", signin)
signupbutton.addEventListener("click", adduser)