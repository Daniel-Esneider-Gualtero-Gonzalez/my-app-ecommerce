import { useEffect, useRef } from "react"
import { animationBurbuja } from "../../../utils/animations/burbuja"

function CardProfile({titleCard = "tittle card default" , iconCard = "component icons  o text",backgraund=""}) {
  const refCardProfile = useRef()
  useEffect(()=>{

    const { cleanAnimations} = animationBurbuja(refCardProfile.current)

    return cleanAnimations

  },[])

  return (
    <div className={`${backgraund} w-[200px]  h-[150px]   flex  justify-center items-center mx-2`} ref={refCardProfile}>

      <h2 className="w-[100px]  overflow-hidden">{titleCard}</h2>
      <div className=" ml-5 text-2xl md:text-[40px] w-[60px]  h-[60px] overflow-hidden justify-center items-center flex">{iconCard}</div>

    </div>
  )
}

export default CardProfile