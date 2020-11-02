import reduceNumero from './reductor.js'
import determinaNombreSegunNumero from './casos.js'

//funcion que calcula los numeros
function calculaNumeros(numero, identificador){
    let resultado =  reduceNumero(numero)
    determinaNombreSegunNumero(resultado, identificador)
}

export default calculaNumeros