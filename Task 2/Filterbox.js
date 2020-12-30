const removetimer = ms => new Promise(res => setTimeout(res, ms))

let nameList = document.getElementById('Namelist')

async function searchformatches() {
    
    let i = 0
    let input = document.getElementById("textIn")
    let upper = input.value.toUpperCase()
    let addName
    let nameList = document.getElementById('Namelist')
    let names = ['Ashish Shah', 'Rashmin Chhatrala', 'Yash Dubey', 'Prakash Jain', 'Yashraj Singh', 'Viraj Sinha', 'Rajesh Kumar', 'Mahesh Marwadi', 'Suresh Sahni', 'Amar Vilas', 'Virdas Singhania', 'Rajeshwari Bindra', 'Birenda Bhalero', 'Virendra Bhupati', 'Bhupendra Singh', 'Bhunam Bam', 'Shri Raj', 'Prashant Kamle', 'Kamlesh Tomar', 'Risabh Khare', 'Rishi Kohli', 'Kunwar Kharwanda', 'Kartik Koli', 'Komal Jain', 'Kartikey Pandey']
    nameList.innerHTML = ""
    if (upper.length > 0) {
        for (i = 0; i < names.length; i++) {
            if (names[i].toUpperCase().indexOf(upper) == -1) {

            } else {
                addName = document.createElement('li')
                addName.innerHTML = names[i]
                nameList.appendChild(addName)
            }
        }
    } else {

    }
    await removetimer(1000)

}

selecinterval = setInterval(function showselec() {
    searchformatches()
}, 1000)

document.getElementById('textIn').addEventListener('change',searchformatches())