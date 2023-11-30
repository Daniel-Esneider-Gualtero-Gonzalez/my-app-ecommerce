import { useEffect, useRef, useState } from "react"
import { animationBurbuja } from "../../../utils/animations/burbuja"

function CardProfile({classNameContainer = "" , children}) {

 
  const refCardProfile = useRef()
  useEffect(() => {
    
    const {cleanAnimations} = animationBurbuja(refCardProfile.current)
    // if (animationPause) cleanAnimation.cleanAnimations()

    return cleanAnimations

  }, [])

  

  return (
    <>
       <div  className={`${classNameContainer} w-[200px]  border  h-[150px]  hover:scale-110   flex  justify-center items-center mx-2`} ref={refCardProfile}>

       {children}

      </div>

    </>
  )
}

export default CardProfile