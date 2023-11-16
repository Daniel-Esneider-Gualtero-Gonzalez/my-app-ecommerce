import React, { useEffect, useRef, useState } from 'react'

function ScrollAnimationContainer({ children }) {
 
  let isScrollingRight = true
  const refScrollContainer = useRef()

  function animateScrollElement() {

    if (isScrollingRight) {

      refScrollContainer.current.scrollLeft += 1; // Ajusta la velocidad de scroll
      if (refScrollContainer.current.scrollLeft >= refScrollContainer.current.scrollWidth - refScrollContainer.current.clientWidth) {
        isScrollingRight = false;
      }
    } else {
      refScrollContainer.current.scrollLeft -= 1; // Ajusta la velocidad de retroceso
      if (refScrollContainer.current.scrollLeft <= 0) {
        isScrollingRight = true;
      }
    }

    const idAnimationFrame = requestAnimationFrame(animateScrollElement)
    
    const clearAnimation = () => cancelAnimationFrame(idAnimationFrame)
    return {clearAnimation}

  }
 

  useEffect(() => {
    
        const {clearAnimation} = animateScrollElement()
     
      return clearAnimation
  }, []);

  
  return (
    <div ref={refScrollContainer}  className='border p-1 flex overflow-hidden'>
      {children}
      <div className='flex-none mx-1 w-[300px] h-[200px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[200px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[200px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[200px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[200px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[200px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[200px] bg-yellow-900 rounded'></div>

    </div>
  )
}

export default ScrollAnimationContainer