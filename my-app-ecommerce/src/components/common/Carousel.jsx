import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import React, { useEffect, useRef, useState } from 'react'

const imagesInitial = [
    'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJvcGF8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1699111156364-021c7878a2cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1699187129235-442d3f1ac069?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D',

]

function Carousel({ listImages=imagesInitial ,...props} ) {
    const refCarrusel = useRef()
    const [images, setImages] = useState([...listImages])
    const [next, setNext] = useState(0)
    
    
    const nextImage = () => {

        setNext(e => {
            if (e + 1 <= images.length - 1) return e + 1

            return e
        })

    }
    const previusImg = () => {

        setNext(e => {
            if (e - 1 >= 0 ) return e - 1

            return e
        })
    }


    return (
        <>
            <div {...props}  ref={refCarrusel}  >

                <img className='object-cover w-full h-full bg-white duration-700 transition-transform  ' src={images[next]} alt="" />
                {next > 0 && <FcPrevious onClick={() => previusImg()} className="absolute text-[100px] left-0 my-auto top-0 bottom-0 hover:text-[110px]" /> }
                {next !== images.length - 1 ? <FcNext onClick={() => nextImage()} className="absolute text-[100px] right-0 top-0 bottom-0 my-auto hover:text-[110px]" /> : null}
            </div>

        </>

    )
}

export default Carousel