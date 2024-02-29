import { useRef } from "react"


function ProductOfWeek() {
    const refImageBig = useRef()
    const imgProductOfWeek = ["https://img.freepik.com/vector-gratis/ilustracion-rastreador-fitness-realista_23-2148521366.jpg?size=626&ext=jpg","https://img.freepik.com/foto-gratis/nuevo-reloj-inteligente-balanceado-mano_23-2150296477.jpg?size=626&ext=jpg",
    "https://img.freepik.com/vector-gratis/rastreadores-estilo-realista_23-2148509776.jpg?size=626&ext=jpg"]

    const handleChangeImage = (e)=>{
        
        const imgOnClick = e.target.src
        const imgBigActual = refImageBig.current.src
        refImageBig.current.classList.add('transition-img')
        refImageBig.current.src = imgOnClick
        e.target.src = imgBigActual

    }
  return (
    <article className=' md:flex gap-1'>
        <div className='h-[200px]  md:h-[400px] md:w-[50%]'>
            <img ref={refImageBig} className=" w-full rounded h-full object-cover" src={imgProductOfWeek[0]} alt="" />
        </div>
        <div className='w-full mt-1 md:mt-0  h-[400px] md:w-[70%]  '>

            <div className="flex gap-1 h-[50%]  border-red-500">
                <div className="w-[50%] h-[170px] md:h-full"><img onClick={handleChangeImage} className="rounded w-full h-full object-cover" src={imgProductOfWeek[1]} alt="" /></div>
                <div className="w-[50%] h-[170px] md:h-full"><img onClick={handleChangeImage} className="rounded w-full h-full object-cover" src={imgProductOfWeek[2]} alt="" /></div>

            </div>

            <div className="mt-3 "> 
                <h3 className="font-semibold">Apple Watch Series 7 GPS, Caja de aluminio, Starlight Sport</h3>
                <p className="text-sm max-w-[70%] overflow-hidden">Descubre el compañero perfecto para tu día a día con el Apple Watch Series 7 GPS. Con su elegante caja de aluminio en el distintivo tono Starlight y una correa deportiva que combina estilo y comodidad, este reloj te ofrece la tecnología más avanzada al alcance de tu muñeca.
                </p>
                <button className="btn-addToCart mt-2">Agregar al carrito</button>
            </div>


        </div>

    </article>
  )
}

export default ProductOfWeek