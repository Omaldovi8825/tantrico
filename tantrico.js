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

//determinar si el dia es valido
fecha.day.addEventListener('blur', () => {
    if (diaInvalido()){
        alert('Día no válido')
    }
})

function diaInvalido(){
    return Number(fecha.day.value) > 31
}

//determinar si el mes es valido
fecha.month.addEventListener('blur', () => {
    if(mesInvalido()){
        alert('Mes no válido')
    }
})

function mesInvalido(){
    return Number(fecha.month.value) > 12
}

//determina si el el año es valido
fecha.year.addEventListener('blur', () => {
    if(anioInvalido()){
        alert('Año no válido')
    }
})

function anioInvalido(){
    return Number(fecha.year.value) < 1900 || Number(fecha.year.value) > 2022 
}

//funcion que determina si la fecha es valida
function determinafechaInvalida(){
    if(diaInvalido() || mesInvalido() || anioInvalido()){
        return true    
    } else if (Number(fecha.day.value) > 29 && Number(fecha.month.value) == 2) {
        return true 
    } else if (Number(fecha.day.value) > 30 && Number(fecha.month.value) == 4) {
        return true  
    } else if (Number(fecha.day.value) > 30 && Number(fecha.month.value) == 6) {
        return true
    } else if (Number(fecha.day.value) > 30 && Number(fecha.month.value) == 9) {
        return true
    } else if (Number(fecha.day.value) > 30 && Number(fecha.month.value) == 11) {
        return true
    } 
}

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

    let numeroAlma = Number(fecha.day.value)
    let numeroKarma = Number(fecha.month.value)
    let numeroDon = digitos.siete + digitos.ocho
    let numeroDestino = digitos.cinco + digitos.seis + numeroDon
    let numeroMision = digitos.uno + digitos.dos + digitos.tres + digitos.cuatro + digitos.cinco + digitos.seis + digitos.siete + digitos.ocho


        if(determinafechaInvalida()){
            alert('fecha invalida')
        } else {
            calculaNumeros(numeroAlma, numeros.soul)
            calculaNumeros(numeroKarma, numeros.karm)
            calculaNumeros(numeroDon, numeros.gift)
            calculaNumeros(numeroDestino, numeros.destiny)
            calculaNumeros(numeroMision, numeros.mission)
        }    
}

