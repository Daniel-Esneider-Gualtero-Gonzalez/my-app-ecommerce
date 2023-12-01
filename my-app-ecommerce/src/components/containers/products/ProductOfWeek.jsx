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
    <div className='flex gap-1'>
        <div className='  h-[400px] w-[50%]'>
            <img ref={refImageBig} className=" w-full h-full object-cover" src={imgProductOfWeek[0]} alt="" />
        </div>
        <div className='  h-[400px] w-[70%]  '>

            <div className="flex gap-1 h-[50%]  border-red-500">
                <div className="w-[50%] h-full"><img onClick={handleChangeImage} className="w-full h-full object-cover" src={imgProductOfWeek[1]} alt="" /></div>
                <div className="w-[50%] h-full"><img onClick={handleChangeImage} className="w-full h-full object-cover" src={imgProductOfWeek[2]} alt="" /></div>

            </div>

            <div className="mt-3 ">
                <h3 className="font-semibold">Title product of the week</h3>
                <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad aliquam molestiae quos! Velit aliquam eius quo quaerat odit, doloribus nulla veniam ea voluptas dignissimos. Rem nesciunt molestias doloremque saepe.</p>
            </div>


        </div>

    </div>
  )
}

export default ProductOfWeek