import React, { useEffect, useState } from 'react'

function IndexedSearch({ className="",search = "", bdCoicidencias = [] }) {

    const [coicidencias, setCoicidencias] = useState([])



    useEffect(() => {

        const resultado = cumpleBusqueda(search, bdCoicidencias)

        setCoicidencias(resultado)
    }, [search])

    useEffect(() => {

    }, [coicidencias])

    return (
        <>
            {coicidencias.length > 0 && coicidencias.map(coici => {
                return <li className={className}>{coici}</li>
            })}
        </>

    )
}


export default IndexedSearch



// funcion que retorna una lista de coincidencia con lo buscado
function cumpleBusqueda(stringBusqueda = "", listBusquedas = []) {

    let coicidenciasCerteras = []
    let ultimasPosiblesCoincidencias = []


    for (let x = 0; x < listBusquedas.length; x++) {
        const busqueda = listBusquedas[x].toLocaleLowerCase();

        let isIncludes = true
        // para rrecorrer todas las palabras que ingresom el usuario y ver si en el string de la posible busqueda esten
        const palabrasSeparadas = stringBusqueda.split(" ")

        for (let z = 0; z < palabrasSeparadas.length; z++) {
            const palabra = palabrasSeparadas[z];

            if (busqueda.includes(palabra) === false) {
                isIncludes = false
                break
            }

        }
        if (isIncludes === false) {

            isIncludes = true

            continue
        }

        for (let i = 0; i < stringBusqueda.length; i++) {
            const letraBusqueda = stringBusqueda[i];

            // si no cumple con las coicidencias certeras se agregan a las ultimas
            if (busqueda[i] !== letraBusqueda) {
                ultimasPosiblesCoincidencias.push(busqueda)
                break
            }

            if (i === stringBusqueda.length - 1) {
                coicidenciasCerteras.push(busqueda)
            }

        }

    }

    return [...coicidenciasCerteras, ...ultimasPosiblesCoincidencias]


}