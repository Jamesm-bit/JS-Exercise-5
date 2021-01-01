alert("Please Wait")

const boxtimer = ms => new Promise(res => setTimeout(res, ms))
const box1colors = ["transparent", "red", "blue", "yellow"]
const box2colors = ["transparent", "purple", "orange", "green", "black", "red"]
const box1 = document.getElementById('1')
const box2 = document.getElementById('2')
const box3 = document.getElementById('3')
const box4 = document.getElementById('4')
let timercheck = false
let i = 0

async function changebox2color() {
    document.getElementById("oops").innerHTML = "Oops"
    for (let i = 0; i < box1colors.length; i++) {
        box2.style.backgroundColor = box1colors[i]
        await boxtimer(3000)
        if (i == box1colors.length - 1) {
            i = 0
        }
    }
}

async function changebox4color() {
    for (i; i < box2colors.length; i++) {
        box4.style.backgroundColor = box2colors[i]
        await boxtimer(5000)
        if (i == box2colors.length - 1) {
            i = 0
        }

    }
}

function keyDown (e) {
    let key = e.key
    if (i < box2colors.length - 1 && i >= 0) {
        if (key == 'ArrowUp' || key == "ArrowRight") {
            i++
            console.log(i)
            box4.style.backgroundColor = box2colors[i]
        } else if (key == "ArrowDown" || key == "ArrowLeft") {
            if(i > 0){
                i--
            }
            console.log(i)
            box4.style.backgroundColor = box2colors[i]
        }
    }
    if(timercheck == false) {
        changebox4color()
        timercheck = true
    }
}

box1.addEventListener("click", changebox2color.bind(null))
document.body.addEventListener('keydown', (event) => {
    keyDown(event)
})


