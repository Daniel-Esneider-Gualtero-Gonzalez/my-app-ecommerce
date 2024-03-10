const genNumRandom = (rangoInicial,rangoFinal) => Math.floor(Math.random() * rangoFinal) + rangoInicial ;

export const genNumberRandomNoRepeat = (rangoInicial  ,rangoFinal, cantNumbersRandom)=>{
    let listNumbersRandom = []

    // comprabar que dada la cantidad de number random que quiere generar sea posible con el rango
    const totalRangeFinal = rangoInicial === 0 ? rangoFinal + 1  : rangoFinal

    if(!(totalRangeFinal >= cantNumbersRandom)) throw new Error("El rango no alcanza para generar dicha cantidad de numeros")

     // creamos un nuevo rango dinamico para que cuando saquemos el rango inicial le sumamos 1
    // para que el algoritmo este algo optimizado
    let newRangoInicial = rangoInicial
    let newRangoFinal = totalRangeFinal

    while (listNumbersRandom.length < cantNumbersRandom ) {

        const numberRandom = genNumRandom(newRangoInicial,newRangoFinal)
        if(listNumbersRandom.includes(numberRandom)) continue
        listNumbersRandom.push(numberRandom)
        if(numberRandom === newRangoInicial) newRangoInicial +=1
        if(numberRandom === newRangoFinal) newRangoFinal -= 1
       
    }
    return listNumbersRandom
}