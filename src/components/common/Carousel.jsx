import React, { useEffect, useMemo, useRef, useState } from 'react'
import useGetProducts from '../../hooks/useGetProducts'
import { genNumberRandomNoRepeat } from '../../utils/globalUtils'

let idInterval = null
let idTimeOutPause = null
let imageIndex = 0
let cantTotalImages = null

function Carousel({ listImages, ...props }) {

    const [isAutomatic, setIsAutomatic] = useState(true)
    const [images, setImages] = useState(null)
    const [image, setImage] = useState(0)
    const { loading, error, products, getProducts, } = useGetProducts()

    const resetImage = () => setImage(e=>0)


    const nextImage = () => {

        setImage(e => {
            if (e + 1 <= images.length - 1) return e + 1

            return e
        })

    }
    const previusImg = () => {

        setImage(e => {
            if (e - 1 >= 0) return e - 1

            return e
        })
    }

    useEffect(() => {
        if (!products) {
            getProducts()
            return
        }
        const imagesRandom = genNumberRandomNoRepeat(0, products.length, 5)
        cantTotalImages = imagesRandom.length - 1
        const images = imagesRandom.map(indexRandom => products[indexRandom] && products[indexRandom].image)
        setImages(images)

    }, [products])

    const changeImageAutomatic = ()=>{
        if(imageIndex === cantTotalImages){
           return  resetImage()
        }
        nextImage()

    }

   

    useEffect(() => {
        if (!images) return
        if (isAutomatic === true) {
            if (idInterval) clearInterval(idInterval)
             
             idInterval = setInterval(() => changeImageAutomatic(), 3000)
            
        }
        if (isAutomatic === false) {
            clearInterval(idInterval)
        }
        return function name(params) {
            clearInterval(idInterval)
        }

    }, [isAutomatic, images])

    const changeGlobalImage = useMemo(()=> imageIndex=image , [image])

    const isPause = ()=>{
        setIsAutomatic(false)
        if(idTimeOutPause) {
         clearTimeout(idTimeOutPause)
        }
        idTimeOutPause = setTimeout(()=>  {
            setIsAutomatic(true) 
        }, 3000)


    }
    // para cuando le den al indicador que contine cada imagen
    const onClickIndicator = (imageIndicator)=>{
        setImage(imageIndicator)
        isPause()

    }


    return (
        <>

            <div className="relative w-[50%] mx-auto  rounded h-56 md:h-96 group" >

                {images && <img src={images && images[image]} className="cover w-full h-full absolute block " alt="..." />}




                {/* <!-- Slider indicators --> */}
                <div className="absolute bg-slate-700 p-2 rounded z-30 flex -translate-x-1/2 bottom-0 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images && images.map((imageSrc, index) => {
                        const imageIndicatorCurrent = index === image ? "bg-blue-600" : "bg-white"
                        return <button onClick={()=> onClickIndicator(index)}  key={"buton to image " + imageSrc} type="button" className={`${imageIndicatorCurrent} w-3 h-3 rounded-full  border`} aria-current="true" aria-label="Slide 1" ></button>
                    })}

                </div>

                {/* <!-- Slider controls --> */}
                <button onClick={()=>{
                    previusImg()
                    isPause()
                }}  type="button" className=" hidden group-hover:flex h-[40px] w-[40px] my-auto text-xl bg-blue-600 text-white rounded-full absolute   inset-0 z-30 " >
                    <svg className="w-4 h-4  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                </button>

                <button onClick={()=>{
                    nextImage()
                    isPause()
                }}  type="button" className=" hidden group-hover:flex h-[40px] w-[40px] my-auto text-xl bg-blue-600 text-white rounded-full absolute top-0  bottom-0 right-0   z-30 " >

                    <svg className="w-4 h-4  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>

                </button>
            </div>


        </>
    )


}

export default Carousel