import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import React, { useEffect, useRef, useState } from 'react'

const imagesInitial = [
    'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJvcGF8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1699111156364-021c7878a2cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1699187129235-442d3f1ac069?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D',

]

function Carousel({listImages}) {
    const refCarrusel = useRef()
    const [images, setImages] = useState([...imagesInitial])
    const [next, setNext] = useState(0)
    // const refImgCurrent = useRef(next)
    



    useEffect(()=> {

        
        if (next>=0) {
            refCarrusel.current.firstElementChild.style.display = "block"
            const widthImg = refCarrusel.current.firstElementChild.clientWidth
            refCarrusel.current.firstElementChild.style.transform = "translateX(0%)"
            
        }
        
    },[next])

    const nextImage = ()=>{
        if(next < images.length - 1 === false) return 
        // calcular bien el translate
        refCarrusel.current.firstElementChild.style.transform = "translateX(-500%)"

        setTimeout(()=> {
            refCarrusel.current.firstElementChild.style.display="none" 
            refCarrusel.current.firstElementChild.style.transform = `translateX(1000%)`

            // calcular  bien cuanto se demora en realizar el tranlate  de arriba ⬆️ en cambiar de imagen 
            setTimeout(()=> setNext(e=> e+1) , 200)

            // calcular tambien mejor el  tiempo en que se tarda para realizar el tranlate de la imagen o elemento que sale
        } , 200)
    }
    const previusImg = ()=>{
        if(next > 0 === false) return 
        // calcular bien el translate
        refCarrusel.current.firstElementChild.style.transform = "translateX(500%)"
        
        

        setTimeout(()=> {
            refCarrusel.current.firstElementChild.style.display="none" 
            refCarrusel.current.firstElementChild.style.transform = `translateX(-1000%)`

            // calcular  bien cuanto se demora en realizar el tranlate  de arriba ⬆️ en cambiar de imagen 
            setTimeout(()=> setNext(e=> e-1) , 200)

            // calcular tambien mejor el  tiempo en que se tarda para realizar el tranlate de la imagen o elemento que sale
        } , 200)
    }

    useEffect(()=> console.log("next image carousel",next) , [next])
    
   

    return (
        <>
            <div ref={refCarrusel} className='border border-black relative h-[400px] flex justify-center items-center overflow-hidden   '>
                
                <img  className=' object-cover w-[900px] h-[300px] bg-white duration-700 transition-transform border border-black   ' src={images[next]} alt="" />
                {next > 0 === true  ? <FcPrevious onClick={() => previusImg()}  className="absolute text-[100px] left-0 my-auto top-0 bottom-0 hover:text-[110px]"/> : null}
                {next < images.length -1 ? <FcNext  onClick={() => nextImage()} className="absolute text-[100px] right-0 top-0 bottom-0 my-auto hover:text-[110px]" /> : null}
            </div>

        </>

    )
}   

export default Carousel