import { useRef } from "react";

const genStarRating = (cant) => {
    const listStartSvg = []
    for (let i = 0; i < cant; i++) {
        listStartSvg.push(
            <svg key={`start${i + 1}`} className="w-4 h-4 text-blue-600 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        )

    }
    return listStartSvg
}

const genNumVotesRandom = () => Math.floor(Math.random() * 300) + 1;

// generamos votos dinamicos por cada estrella
const genVotes = (cantStars) => {
    
    let sumNumVotes = 0
    const infoVotes = {}
    for (let i = 0; i < cantStars; i++) {
        const numVotes = genNumVotesRandom()
        infoVotes[i + 1] = numVotes
        sumNumVotes += numVotes

    }


    return { cantTotalvotes: sumNumVotes, infoVotes:infoVotes }
}

// crea los promedios y los votos finales para consumir
const createPromedio = (votes)=>{
    let lisVotes = []
    const {cantTotalvotes,infoVotes} = votes
    for (const key in infoVotes) {
        const cantVotesStart = infoVotes[key]
        const promedio = (cantVotesStart / cantTotalvotes) * 100
        const newInfoStarVotes = { start: Number(key), cantvotes: cantVotesStart, promedio: promedio }
        lisVotes.push(newInfoStarVotes)

    }

    const newListVotes = lisVotes.sort((a, b) => b.start - a.start)

    return { lisVotes:newListVotes}
    
}

const totalRating = (listvotes,cantvotes)=>{
    let sumPromedio = 0
    for (let i = 0; i < listvotes.length; i++) {
        const {start,cantvotes} = listvotes[i];
        sumPromedio += start * cantvotes
        
    }
    const totalPromedio = Math.floor(sumPromedio / cantvotes) 
    return totalPromedio

}


const votes = genVotes(5) // generamos los votos de por cada estrella
const promedio = createPromedio(votes) //sacamos el promedio
const startTotalRating = totalRating(promedio.lisVotes,votes.cantTotalvotes) // sacamos la cantidad total de estrellas en cuanto a la calificacion
const starts = genStarRating(startTotalRating) // generamos la cantidad de estrellas del rating
function RatingProduct() {

    console.log(votes)
    return (
        <>
            <article>
                <div className="flex items-center mb-2">
                    {starts}
                    <p className="ms-1 text-sm font-medium ">{startTotalRating}</p>
                    <p className="ms-1 text-sm font-medium ">de</p>
                    <p className="ms-1 text-sm font-medium ">5</p>
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{votes.cantTotalvotes} Calificaciones</p>


                {
                    promedio.lisVotes.map(votesStart => {
                        const width = `${votesStart.promedio}%`
                        return <div className=" flex gap-2 items-center mt-4">
                            <span className="text-sm font-medium text-black  hover:underline">{votesStart.start}</span>
                            <div className=" border-black w-2/4 h-5  bg-gray-200 rounded dark:bg-gray-400">
                                <div style={{ 'width': `${width}` }} className="h-5 bg-blue-500  rounded"></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 ">{votesStart.promedio.toFixed(1)}%</span>
                        </div>
                    })
                }

            </article>

        </>
    )
}

export default RatingProduct