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

export default determinaNombreSegunNumero