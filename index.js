//desglose de fecha
var day = document.getElementById('dia')
var month = document.getElementById('mes')
var year = document.getElementById('anio')

//desglose de numero
var soul = document.getElementById('alma')
var karm = document.getElementById('karma')
var gift = document.getElementById('don')
var destiny = document.getElementById('destino')
var mission = document.getElementById('mision')

//click en boton que despliega todos los mumeros
function despliegaNumero(){
    let dia = day.value
    let mes = month.value
    let anio = year.value

    determinaNumeroDeAlma(dia)
    determinaNumeroDeKarma(mes)
    determinaNumeroDeDon(anio)
    determinaNumerodeDestino(anio)
    determinaNumeroDeMision(dia, mes, anio)
}

//Alma: suma los digitos del dia de nacimiento
function determinaNumeroDeAlma(numero){
    let digitiUno = Number(numero.charAt(0))
    let digitoDos = Number(numero.charAt(1))
    let numeroAlma = digitiUno + digitoDos
    soul.innerHTML = numeroAlma
}

//Karma: numero del mes de nacimiento
function determinaNumeroDeKarma(numero){
    let mes = Number(numero)
    if(mes == 12){
        karma.innerHTML = 3
    } else {
        karm.innerHTML = mes
    }
}

//Don: suma los ultimos 2 digitos del anio
function determinaNumeroDeDon(numero){
    let penultimoDelAnio = Number(numero.charAt(2))
    let ultimoDelAnio = Number(numero.charAt(3))
    let numeroDon = penultimoDelAnio + ultimoDelAnio
    if(numeroDon <= 11) {
        gift.innerHTML = numeroDon
    } else {
        let numeroDonToString = String(numeroDon)
        let numeroDon1 = Number(numeroDonToString.charAt(0))
        let numeroDon2 = Number(numeroDonToString.charAt(1))
        gift.innerHTML = numeroDon1 + numeroDon2
    }
}

//Destino: suma todos los digitos del anio de nacimiento
function determinaNumerodeDestino(number){
    let primerDigitoAnio = Number(number.charAt(0))
    let segundoDigitoAnio = Number(number.charAt(1))
    let tercerDigitoAnio = Number(number.charAt(2))
    let cuartoDigitoAnio = Number(number.charAt(3))
    let numeroDestino = primerDigitoAnio + segundoDigitoAnio + tercerDigitoAnio + cuartoDigitoAnio
    if(numeroDestino <= 11 || numeroDestino == 22) {
        destiny.innerHTML = numeroDestino
    } else {
        let numeroDestinoToString = String(numeroDestino)
        let numeroDestino1 = Number(numeroDestinoToString.charAt(0))
        let numeroDestino2 = Number(numeroDestinoToString.charAt(1))
        destiny.innerHTML = numeroDestino1 + numeroDestino2
    }
}

//Mision: suma los 8 digitos de la fecha de nacimiento
function determinaNumeroDeMision(dia, mes, anio){
    let primerDigitoDia = Number(dia.charAt(0))
    let segundoDigitoDia = Number(dia.charAt(1))
    let primerDigitoMes = Number(mes.charAt(0))
    let segundoDigitoMes = Number(mes.charAt(1))
    let primerDigitoAnio = Number(anio.charAt(0))
    let segundoDigitoAnio = Number(anio.charAt(1))
    let tercerDigitoAnio = Number(anio.charAt(2))
    let cuartoDigitoAnio = Number(anio.charAt(3))
    let numeroDeMision = primerDigitoDia + segundoDigitoDia + primerDigitoMes + segundoDigitoMes + primerDigitoAnio + segundoDigitoAnio + tercerDigitoAnio + cuartoDigitoAnio
    if(numeroDeMision <= 11 || numeroDeMision == 22 || numeroDeMision == 33){
        mission.innerHTML = numeroDeMision
    } else {
        console.log(numeroDeMision)
        let numerDeMisionToString = String(numeroDeMision)
        let numeroDeMision1 = Number(numerDeMisionToString.charAt(0))
        let numeroDeMision2 = Number(numerDeMisionToString.charAt(1))
        let numeroDeMisionReducido = numeroDeMision1 + numeroDeMision2
        if(numeroDeMisionReducido == 12){
            mission.innerHTML = 3
        } else {
            mission.innerHTML = numeroDeMisionReducido
        }
    }
}