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

//function reducir numeros
let reduceNumero = numero => {
    if(numero > 11 && numero != 22 && numero != 33){
        let numeroPos1 = Number(String(numero).charAt(0))
        let numeroPos2 = Number(String(numero).charAt(1))
        let result = numeroPos1 + numeroPos2
        if(result > 11){
            let numeroPos1 = Number(String(result).charAt(0))
            let numeroPos2 = Number(String(result).charAt(1))
            result = numeroPos1 + numeroPos2
        }
        return result
    } else {
        return numero
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

    calculaNumeroAlma(digitos)
    calculaNumeroKarma(fecha.month.value)
    calculaNumeroDon(digitos)
    calculaNumeroDestino(digitos)
    calculaNumeroMision(digitos)
}

//calcula numero de alma
function calculaNumeroAlma({uno, dos}){
    let resultado =  reduceNumero(uno + dos)
   determinaNombreSegunNumero(resultado, numeros.soul)
}

//calcula numero de karma
function calculaNumeroKarma(numero){
    let resultado = reduceNumero(Number(numero))
    determinaNombreSegunNumero(resultado, numeros.karm) 
}

//calcula numero de don
function calculaNumeroDon({siete, ocho}){
    let resultado = reduceNumero(siete + ocho)
    determinaNombreSegunNumero(resultado, numeros.gift)
}

//calcula numero de destino
function calculaNumeroDestino({cinco, seis, siete, ocho}){
    let resultado = reduceNumero(cinco + seis + siete + ocho)
    determinaNombreSegunNumero(resultado, numeros.destiny)
}

//calcula numero de Mision 
function calculaNumeroMision({uno, dos, tres, cuatro, cinco, seis, siete, ocho}){
    let resultado = reduceNumero(uno + dos + tres + cuatro + cinco + seis + siete + ocho)
    determinaNombreSegunNumero(resultado, numeros.mission)
}


//determinar nombre segun el numero
function determinaNombreSegunNumero(numero, nombre){
    switch(numero){
        case 1:
            nombre.innerHTML = `${numero} Líder inconsciente`
            break
        case 2:
            nombre.innerHTML = `${numero} Mente negativa o mediador`
            break
        case 3:
            nombre.innerHTML = `${numero} Artista o mente positiva`
            break
        case 4:
            nombre.innerHTML = `${numero} Mente equilibrada`
            break
        case 5:
            nombre.innerHTML = `${numero} Profesor o corporalista`
            break
        case 6:
            nombre.innerHTML = `${numero} Místico`
            break
        case 7:
            nombre.innerHTML = `${numero} Líder bondadoso`
            break
        case 8:
            nombre.innerHTML = `${numero} Sanador`
            break
        case 9:
            nombre.innerHTML = `${numero} Maestro de sí mismo`
            break
        case 10:
            nombre.innerHTML = `${numero} Líder duro o número del sol`
            break
        case 11:
        case 22:
        case 33:
            nombre.innerHTML = `${numero} Número gurú`
            break    
        default:
            nombre.innerHTML = `${numero} Algo anda mal`        
    }
}
