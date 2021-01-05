let users = JSON.parse(localStorage.getItem("users"))
let courses = ['Javascript', 'CSS', 'HTML']
let unamein
let pwordin
let utypein
let pwordconfirm
const signinbutton = document.getElementById('signinbutton')
const signupbutton = document.getElementById('signupbutton')
const logoutbutton = document.getElementById('logoutbutton')
const registerbutton = document.getElementById('register')
const username = document.getElementById('user')
let curruser
let currpass
let currtype

console.log(users)

function resetlogout() {
    localStorage.setItem("users", JSON.stringify(users))
    window.location.href = "index.html"
}
function returntomain() {
    localStorage.setItem("users", JSON.stringify(users))
    window.location.href = "index.html"
}

function iterateoveruser() {
    let unameadmin = localStorage.getItem("curruser")
    let unameadim = document.getElementById('user')
    unameadim.innerHTML = unameadmin
    users = JSON.parse(localStorage.getItem("users"))
    for (let k = 0; k < users.length; k++) { displaynames(k, users[k]) }
}

function javavis(i, button) {
    if (users[i].javavis) {
        button.innerHTML = "Add"
        users[i].javavis = false
    } else {
        button.innerHTML = "Remove"
        users[i].javavis = true
    }
}

function cssvis(i, button) {
    if (users[i].cssvis) {
        button.innerHTML = "Add"
        users[i].cssvis = false
    } else {
        button.innerHTML = "Remove"
        users[i].cssvis = true
    }
}

function htmlvis(i, button) {
    if (users[i].htmlvis) {
        button.innerHTML = "Add"
        users[i].htmlvis = false
    } else {
        button.innerHTML = "Remove"
        users[i].htmlvis = true
    }
}

function displaynames(i, user) {
    if (user.utype == "Admin") {
        return
    }
    let userdiv = document.createElement('div')
    userdiv.setAttribute("class", "userdiv")
    let userthing
    let userbutton

    let inputname = document.createElement("p")
    inputname.innerHTML = user.uname
    userdiv.appendChild(inputname)

    userthing = document.createElement('p')
    userthing.innerHTML = "Javascript"
    userbutton = document.createElement('button')
    userbutton.setAttribute("class", "userbutton")
    if (user.javavis) { userbutton.innerHTML = "Remove" } else { userbutton.innerHTML = "Add" }
    userbutton.addEventListener("click", javavis.bind(null, i, userbutton))
    userdiv.appendChild(userthing)
    userdiv.appendChild(userbutton)

    userthing = document.createElement('p')
    userthing.innerHTML = "CSS"
    userbutton = document.createElement('button')
    userbutton.setAttribute("class", "userbutton")
    if (user.cssvis) { userbutton.innerHTML = "Remove" } else { userbutton.innerHTML = "Add" }
    userbutton.addEventListener("click", cssvis.bind(null, i, userbutton))
    userdiv.appendChild(userthing)
    userdiv.appendChild(userbutton)


    userthing = document.createElement('p')
    userthing.innerHTML = "HTML"
    userbutton = document.createElement('button')
    userbutton.setAttribute("class", "userbutton")
    if (user.htmlvis) { userbutton.innerHTML = "Remove" } else { userbutton.innerHTML = "Add" }
    userbutton.addEventListener("click", htmlvis.bind(null, i, userbutton))
    userdiv.appendChild(userthing)
    userdiv.appendChild(userbutton)

    document.getElementById("userpage").appendChild(userdiv)
}

function changewindow() {
    localStorage.setItem("users", JSON.stringify(users))
    window.location.href = "signup.html"
}

function addclass(i, div) {
    let genclass = document.createElement('p')
    genclass.setAttribute("class", "genclasses")
    genclass.setAttribute('id', 'class' + i)
    genclass.innerHTML = i
    div.appendChild(genclass)
}

/*"javavis":false,"cssvis":false,"htmlvis":false*/

function addclasses(user) {
    divlist2 = document.createElement("div")
    divlist2.setAttribute("id", "div21")
    divlist2.setAttribute("class", "divhold")
    if (user.javavis) {
        addclass('Javascript', divlist2)
    }
    if (user.cssvis) {
        addclass('CSS', divlist2)
    }
    if (user.htmlvis) {
        addclass('HTML', divlist2)
    }
    document.getElementById("courseholder").appendChild(divlist2)
}

function adduser() {
    unamein = document.getElementById("unamesu")
    pwordin = document.getElementById('pwordsu')
    pwordconfirm = document.getElementById('confirmpwordsu')
    users = JSON.parse(localStorage.getItem("users"))
    let usertypes = document.getElementsByName("usertype")

    for (let unpos = 0; unpos < users.length; unpos++) {
        if (users[unpos].uname == unamein.value) {
            alert("That user name is already taken.")
            return;
        }
    }
    if (pwordin.value != pwordconfirm.value) {
        alert("your password does not match the confirmation")
        return
    }

    for (let v = 0; v < usertypes.length; v++) {
        if (usertypes[v].checked == true) {
            utypein = usertypes[v].value
        }
    }
    users.push({ "uname": unamein.value, "pword": pwordin.value, "utype": utypein, "javavis": false, "cssvis": false, "htmlvis": false })
    localStorage.setItem("users", JSON.stringify(users))
    window.location.href = "index.html"
}

function signin() {
    users = JSON.parse(localStorage.getItem("users"))
    unamein = document.getElementById("unamesi")
    pwordin = document.getElementById('pwordsi')
    if (window.getComputedStyle(unamein).visibility === 'visible' && window.getComputedStyle(pwordin).visibility === 'visible') {
        let signuser = unamein.value
        let signpass = pwordin.value
        for (let i = 0; i < users.length; i++) {
            if (users[i].uname == signuser && users[i].pword == signpass) {
                curruser = users[i].uname
                currpass = users[i].pword
                currtype = users[i].utype

                username.innerHTML = curruser
                addclasses(users[i])
                unamein.value = ""
                pwordin.value = ""
                unamein.style.visibility = 'hidden'
                pwordin.style.visibility = 'hidden'
                signinbutton.style.visibility = 'hidden'
                signupbutton.style.visibility = 'hidden'
                logoutbutton.style.visibility = "visible"
                if (users[i].utype == "Admin") {
                    localStorage.setItem("curruser", JSON.stringify(curruser))
                    window.location.href = "adminpage.html"
                } else {
                    return
                }
                return
            }
        }
        alert("The username or password is incorrect")
        pwordin.value = ""
    } else {
        unamein.style.visibility = 'visible'
        pwordin.style.visibility = 'visible'
    }

}

function logout() {
    curruser = ""
    currpass = ""
    username.innerHTML = ""
    document.getElementById("courseholder").innerHTML = ""
    signinbutton.style.visibility = 'visible'
    signupbutton.style.visibility = 'visible'
    logoutbutton.style.visibility = "hidden"
}

