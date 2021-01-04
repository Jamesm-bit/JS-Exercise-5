let users = []
let courses = ['Javascript', 'CSS', 'HTML']
let unamein
let pwordin
let utypein
const signinbutton = document.getElementById('signinbutton')
const signupbutton = document.getElementById('signupbutton')
const logoutbutton = document.getElementById('logoutbutton')
const registerbutton = document.getElementById('register')
const username = document.getElementById('user')
let curruser
let currpass
let currtype

function resetlogout() {
    localStorage.setItem("users", JSON.stringify(users))
    window.location.href = "index.html"
}

function iterateoveruser() {
    let unameadmin = localStorage.getItem("curruser")
    let unameadim = document.getElementById('user')
    unameadmin.innerHTML = unameadmin
    users = JSON.parse(localStorage.getItem("users"))
    for (let k = 0; k < users.length; k++) { displaynames(k, users[k]) }
}

function removeassignjava(i) {
    users[i].javavis = false
    console.log(users)
}
function addassignjava(i,affect){
    users[i].javavis = true
    console.log(users)
}
function removeassignCSS(i) {
    users[i].cssvis = false
    console.log(users)
}
function addassignCSS(i,affect){
    users[i].cssvis = true
    console.log(users)
}
function removeassignHTML(i) {
    users[i].htmlvis = false
    console.log(users)
}
function addassignHTML(i,affect){
    users[i].htmlvis = true
    console.log(users)
}

function displaynames(i, user) {
    if(user.utype == "Admin") {
        return
    }
    let userdiv = document.createElement('div')
    let userthing
    let userbutton
    let username = document.createElement("p")
    username.innerHTML = user.uname
    userdiv.appendChild(username)
    if (user.javavis) {
        userthing = document.createElement('p')
        userthing.innerHTML = "Javascript"
        userbutton = document.createElement('button')
        userbutton.innerHTML = "remove"
        userbutton.addEventListener("click",removeassignjava(i))
        userdiv.appendChild(userthing)
        userdiv.appendChild(userbutton)
    } else {
        userthing = document.createElement('p')
        userthing.innerHTML = "Javascript"
        userbutton = document.createElement('button')
        userbutton.innerHTML = "add"
        userbutton.addEventListener("click",addassignjava(i))
        userdiv.appendChild(userthing)
        userdiv.appendChild(userbutton)
    }
    if (user.cssvis) {
        userthing = document.createElement('p')
        userthing.innerHTML = "CSS"
        userbutton = document.createElement('button')
        userbutton.innerHTML  = "remove"
        userbutton.addEventListener("click",removeassignCSS(i))
        userdiv.appendChild(userthing)
        userdiv.appendChild(userbutton)
    } else {
        userthing = document.createElement('p')
        userthing.innerHTML = "CSS"
        userbutton = document.createElement('button')
        userbutton.innerHTML= "add"
        userbutton.addEventListener("click",addassignCSS(i))
        userdiv.appendChild(userthing)
        userdiv.appendChild(userbutton)
    }
    if (user.htmlvis) {
        userthing = document.createElement('p')
        userthing.innerHTML = "HTML"
        userbutton = document.createElement('button')
        userbutton.innerHTML = "remove"
        userbutton.addEventListener("click",removeassignHTML(i))
        userdiv.appendChild(userthing)
        userdiv.appendChild(userbutton)
    } else {
        userthing = document.createElement('p')
        userthing.innerHTML = "HTML"
        userbutton = document.createElement('button')
        userbutton.innerHTML = "add"
        userbutton.addEventListener("click",addassignHTML(i))
        userdiv.appendChild(userthing)
        userdiv.appendChild(userbutton)
    }
    document.getElementById("userpage").appendChild(userdiv)
}

function changewindow() {
    localStorage.setItem("users", JSON.stringify(users))
    window.location.href = "signup.html"
}

function addclass(i, div) {
    let genclass = document.createElement('p')
    genclass.setAttribute('id', 'class' + i)
    genclass.innerHTML = i
    div.appendChild(genclass)
}

/*"javavis":false,"cssvis":false,"htmlvis":false*/

function addclasses(user) {
    divlist2 = document.createElement("div")
    divlist2.setAttribute("id", "div21")
    divlist2.setAttribute("class", "divhold")
    if(user.javavis){
        addclass('Javascript', divlist2)
    }
    if(user.cssvis){
        addclass('Css', divlist2)
    }
    if(user.htmlvis){
        addclass('HTML', divlist2)
    }


    document.getElementById("courseholder").appendChild(divlist2)
}

function adduser() {
    unamein = document.getElementById("unamesu")
    pwordin = document.getElementById('pwordsu')
    users = JSON.parse(localStorage.getItem("users"))
    let usertypes = document.getElementsByName("usertype")

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
    console.log(users)
    unamein = document.getElementById("unamesi")
    pwordin = document.getElementById('pwordsi')
    if (window.getComputedStyle(unamein).visibility === 'visible' && window.getComputedStyle(pwordin).visibility === 'visible') {
        let signuser = unamein.value
        let signpass = pwordin.value
        for (let i = 0; i < users.length; i++) {
            console.log(users[i].uname + " " + i)
            if (users[i].uname == signuser) {
                if (users[i].pword == signpass) {

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
                    if(users[i].utype == "Admin") {
                        localStorage.setItem("curruser",JSON.stringify(curruser))
                        window.location.href = "adminpage.html"
                    }
                }
                else {
                    return
                }
            }
        }


    } else {
        unamein.style.visibility = 'visible'
        pwordin.style.visibility = 'visible'
    }

}

function logout() {
    curruser = ""
    currpass = ""
    username.innerHTML = ""
    document.getElementById("courseholder").remove()
    signinbutton.style.visibility = 'visible'
    signupbutton.style.visibility = 'visible'
    logoutbutton.style.visibility = "hidden"
}

