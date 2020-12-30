const removetimer = ms => new Promise(res => setTimeout(res, ms))

const nameList = document.getElementById('Namelist')

async function searchformatches() {

    let i = 0
    let input = document.getElementById("textIn")
    let upper = input.value.toUpperCase()
    let addName
    let names = ['Ashish Shah', 'Rashmin Chhatrala', 'Yash Dubey', 'Prakash Jain', 'Yashraj Singh', 'Viraj Sinha', 'Rajesh Kumar', 'Mahesh Marwadi', 'Suresh Sahni', 'Amar Vilas', 'Virdas Singhania', 'Rajeshwari Bindra', 'Birenda Bhalero', 'Virendra Bhupati', 'Bhupendra Singh', 'Bhunam Bam', 'Shri Raj', 'Prashant Kamle', 'Kamlesh Tomar', 'Risabh Khare', 'Rishi Kohli', 'Kunwar Kharwanda', 'Kartik Koli', 'Komal Jain', 'Kartikey Pandey']
    nameList.innerHTML = ""
    if (upper.length > 0) {
        names.forEach((name) => {
            if (!(name.toUpperCase().indexOf(upper) == -1)) {
                addName = document.createElement('li')
                console.log("whole thing "+ name.substring(0,name.toUpperCase().indexOf(upper)-1)+"<span class='highligh'>"+name.substring(name.toUpperCase().indexOf(upper),(name.toUpperCase().indexOf(upper)+upper.length))+"</span>"+name.substring(name.toUpperCase().indexOf(upper)+upper.length))
                let highlight = name.substring(0,name.toUpperCase().indexOf(upper))+"<span class='highlight'>"+name.substring(name.toUpperCase().indexOf(upper),(name.toUpperCase().indexOf(upper)+upper.length))+"</span>"+name.substring(name.toUpperCase().indexOf(upper)+upper.length)
                addName.innerHTML = highlight
                console.log(addName.innerHTML)
                nameList.appendChild(addName)
            }
        })
    }
}

/*
selecinterval = setInterval(function showselec() {
    searchformatches()
}, 1000)
*/

document.getElementById('textIn').addEventListener('input', searchformatches)