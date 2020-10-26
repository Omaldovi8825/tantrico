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

//desglose del nombre segun el numero
var nomSoul = document.getElementById('almaNombre')
var nomKarm = document.getElementById('karmaNombre')
var nomGift = document.getElementById('donNombre')
var nomDestiny = document.getElementById('destinoNombre')
var nomMission = document.getElementById('misionNombre')

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
    determinaNombreSegunNumero(numeroAlma, nomSoul)
}

//Karma: numero del mes de nacimiento
function determinaNumeroDeKarma(numero){
    let mes = Number(numero)
    if(mes == 12){
        karma.innerHTML = 3
        determinaNombreSegunNumero(3, nomKarm)
    } else {
        karm.innerHTML = mes
        determinaNombreSegunNumero(mes, nomKarm)
    }
}

//Don: suma los ultimos 2 digitos del anio
function determinaNumeroDeDon(numero){
    let penultimoDelAnio = Number(numero.charAt(2))
    let ultimoDelAnio = Number(numero.charAt(3))
    let numeroDon = penultimoDelAnio + ultimoDelAnio
    if(numeroDon <= 11) {
        gift.innerHTML = numeroDon
        determinaNombreSegunNumero(numeroDon, nomGift)
    } else {
        let numeroDonToString = String(numeroDon)
        let numeroDon1 = Number(numeroDonToString.charAt(0))
        let numeroDon2 = Number(numeroDonToString.charAt(1))
        let sumaDon1y2 = numeroDon1 + numeroDon2
        gift.innerHTML = sumaDon1y2
        determinaNombreSegunNumero(sumaDon1y2, nomGift)
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
        determinaNombreSegunNumero(numeroDestino, nomDestiny)
    } else {
        let numeroDestinoToString = String(numeroDestino)
        let numeroDestino1 = Number(numeroDestinoToString.charAt(0))
        let numeroDestino2 = Number(numeroDestinoToString.charAt(1))
        let sumaDestino1y2 = numeroDestino1 + numeroDestino2
        destiny.innerHTML = sumaDestino1y2
        determinaNombreSegunNumero(sumaDestino1y2, nomDestiny)
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
        determinaNombreSegunNumero(numeroDeMision, nomMission)
    } else {
        console.log(numeroDeMision)
        let numerDeMisionToString = String(numeroDeMision)
        let numeroDeMision1 = Number(numerDeMisionToString.charAt(0))
        let numeroDeMision2 = Number(numerDeMisionToString.charAt(1))
        let numeroDeMisionReducido = numeroDeMision1 + numeroDeMision2
        if(numeroDeMisionReducido == 12){
            mission.innerHTML = 3
            determinaNombreSegunNumero(3, nomMission)
        } else {
            mission.innerHTML = numeroDeMisionReducido
            determinaNombreSegunNumero(numeroDeMisionReducido, nomMission)
        }
    }
}

//determinar nombre segun el numero
function determinaNombreSegunNumero(numero, nombre){
    switch(numero){
        case 1:
            nombre.innerHTML = "Líder inconsciente"
            break
        case 2:
            nombre.innerHTML = "Mente negativa o mediador"
            break
        case 3:
            nombre.innerHTML = "Artista o mente positiva"
            break
        case 4:
            nombre.innerHTML = "Mente equilibrada"
            break
        case 5:
            nombre.innerHTML = "Profesor o corporalista"
            break
        case 6:
            nombre.innerHTML = "Místico"
            break
        case 7:
            nombre.innerHTML = "Líder bondadoso"
            break
        case 8:
            nombre.innerHTML = "Sanador"
            break
        case 9:
            nombre.innerHTML = "Maestro de sí mismo"
            break
        case 10:
            nombre.innerHTML = "Líder duro o número de sol"
            break
        case 11:
        case 22:
        case 33:
            nombre.innerHTML = "Número gurú"
            break        
    }
}
