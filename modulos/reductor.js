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

export default reduceNumero