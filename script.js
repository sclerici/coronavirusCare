const dataContainer = document.getElementById('data-container')
const apiUrl = `https://corona.lmao.ninja/v2/countries/`
const paisesLista = document.getElementById('select-paises')

let paisTitulo = document.getElementById('country-el')


const activeNumber = document.getElementById('active-number')
const criticalNumber = document.getElementById('critical-number')
const recoveredNumber = document.getElementById('recovered-number')
const totalNumber = document.getElementById('total-number')
const deathsNumber = document.getElementById('deaths-number')
const testedNumber = document.getElementById('tested-number')

async function getData(){
 const pais = paisesLista.value;
 const response = await fetch(`https://corona.lmao.ninja/v2/countries/${pais}`)
 const data = await response.json();

   activeNumber.innerText = `${data.active}`
   criticalNumber.innerText = `${data.critical}`
   recoveredNumber.innerText = `${data.recovered}`
   totalNumber.innerText = `${data.cases}`
   deathsNumber.innerText = `${data.deaths}`
   testedNumber.innerText = `${data.tests}`
   paisTitulo.innerText = `${pais}`

}

getData()


paisesLista.addEventListener('change', getData)