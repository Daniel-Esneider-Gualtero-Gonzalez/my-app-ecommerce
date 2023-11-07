import { useEffect, useRef } from "react"
import { animationBurbuja } from "../utils/animations/burbuja"


function Footer() {

    const aimationCircle = ()=>{

    }

    
  return (
    <div onMouseEnter={()=> console.log("clearanimation y dar controles de scroll al usuario")} onMouseLeave={()=> console.log("volver a inicar la animacion")} className='border relative  bg-gray-200 border-black mt-1 h-[500px]'>
        <div  className="bg-white w-[50%] h-full"></div>

        <div  className="bg-yellow-500 h-[200px]  top-0  absolute w-[400px] rounded-bl-full   rounded-tr-full"></div>
        <div  className="bg-yellow-500 h-[200px]  top-0 right-0  absolute w-[400px] rounded-br-full   rounded-tl-full"></div>
        <div  className="bg-yellow-500 h-[200px]  bottom-0  absolute w-[400px] rounded-br-full   rounded-tl-full"></div>
        <div  className="bg-yellow-500 h-[200px]  bottom-0  right-0 absolute w-[400px] rounded-bl-full   rounded-tr-full"></div>
        <div className="bg-yellow-500 h-[200px] border p-2 border-black   left-0 right-0 mx-auto my-auto bottom-0  top-0 rounded-full  absolute w-[200px] ">
          <span className="mx-auto flex my-auto w-fit mt-[20%] border ">this is footer</span>
        </div>
    </div>
  )
}

export default Footer