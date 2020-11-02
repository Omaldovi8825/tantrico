import calculaNumeros from './modulos/calculaNumeros.js'

const boton = document.getElementById('botoncito')

//objeto que contiene los valores de fecha
let fecha = {
    day: document.getElementById('dia'),
    month: document.getElementById('mes'),
    year: document.getElementById('anio')
}

//objeto que van a desplegar valor y nombre de cada numero
let numeros = {
    soul: document.getElementById('alma'),
    karm: document.getElementById('karma'),
    gift: document.getElementById('don'),
    destiny: document.getElementById('destino'),
    mission: document.getElementById('mision')
}

boton.onclick = despliegaNumero

//click en boton que despliega todos los mumeros
function despliegaNumero(){
    let digitos = {
        uno: Number(String(fecha.day.value).charAt(0)),
        dos: Number(String(fecha.day.value).charAt(1)),
        tres: Number(String(fecha.month.value).charAt(0)),
        cuatro: Number(String(fecha.month.value).charAt(1)),
        cinco: Number(String(fecha.year.value).charAt(0)),
        seis: Number(String(fecha.year.value).charAt(1)),
        siete: Number(String(fecha.year.value).charAt(2)),
        ocho: Number(String(fecha.year.value).charAt(3)),
    }  

    let numeroAlma = digitos.uno + digitos.dos
    let numeroKarma = Number(fecha.month.value)
    let numeroDon = digitos.siete + digitos.ocho
    let numeroDestino = digitos.cinco + digitos.seis + numeroDon
    let numeroMision = numeroAlma + digitos.tres + digitos.cuatro + numeroDestino

    calculaNumeros(numeroAlma, numeros.soul)
    calculaNumeros(numeroKarma, numeros.karm)
    calculaNumeros(numeroDon, numeros.gift)
    calculaNumeros(numeroDestino, numeros.destiny)
    calculaNumeros(numeroMision, numeros.mission)
}
