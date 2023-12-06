import React, { useEffect, useRef, useState } from 'react'

function AnimationMovement({backgroundColor}) {
    
    const refContainer = useRef()
    
    const animateMovement = ()=>{
        
        const randomMovementX = Math.floor(Math.random() * refContainer.current.parentElement.clientWidth)
        const randomMovementY = Math.floor(Math.random() * refContainer.current.parentElement.clientHeight)
        
        refContainer.current.style.transform = `translateX(${randomMovementX}%) translateY(${randomMovementY}%)`
       
        
    }
   
    



    useEffect(()=> {
       
       const idAnimation =  setInterval(()=>{
            animateMovement()
        } , 9000)

        return ()=> clearInterval(idAnimation)
    }, [])
    
  return (

        <div ref={refContainer} className={`ml-5 w-[80px]  ${backgroundColor} transition-transform duration-[9s]  ease-linear h-[80px] rounded-full absolute `}></div>
    
  )
}

export default AnimationMovement