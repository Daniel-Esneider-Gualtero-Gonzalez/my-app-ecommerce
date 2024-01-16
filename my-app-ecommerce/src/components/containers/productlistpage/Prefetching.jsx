import React, { useEffect, useRef } from 'react'

// este componente realiza la logica del prefecthing con evnetos y ejecutando el prefething
function Prefetching({className="", handlePrefetching={},children}) {
  const refSCantScroll = useRef(0) // para registrar el scroll ya que no puede hacer prefetching scroleando hacia arriba
    let isPrefetching = false
    const containerPrefetching = useRef()
    const handleScrollPrefetching = (e)=>{
           
      const {scrollHeight,scrollTop,clientHeight} = e.target

      const scrollCurrent = scrollTop + clientHeight

      if(scrollCurrent >= scrollHeight  && isPrefetching === false    ) {
       
        isPrefetching = true
        
         handlePrefetching().finally(()=>isPrefetching = false)

      }

      refSCantScroll.current = scrollCurrent
  }

    useEffect(()=> {
      

        const eventoPrefetchingContainer = containerPrefetching.current.addEventListener("scroll", handleScrollPrefetching)
        
         return () => {
          // limpiar el evento que se encarga del prefetching
          // containerPrefetching.current.removeEventListener("scroll",handleScrollPrefetching);
      };
        
    },[])
  return (
    <div ref={containerPrefetching} className={className}>
        {children}
    </div>
  )
}

export default Prefetching