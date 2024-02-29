import React, { useEffect, useRef } from 'react'

// realiza la ejecuciond una funcion entorno al evento scroll cuando llegue al final
function Prefetching({ handlePrefetching,...props}) {
  const refSCantScroll = useRef(0) // para registrar el scroll ya que no puede hacer prefetching scroleando hacia arriba
    let isPrefetching = false
    const containerPrefetching = useRef()
    const handleScrollPrefetching = (e)=>{
     
      if(!handlePrefetching) return
      const {scrollHeight,scrollTop,clientHeight} = e.target

      const scrollCurrent = scrollTop + clientHeight

      if(scrollCurrent >= scrollHeight  && isPrefetching === false ) {
      
        isPrefetching = true
         handlePrefetching().finally(()=>isPrefetching = false)

      }

      refSCantScroll.current = scrollCurrent
  }

    useEffect(()=> {
      

        containerPrefetching.current.addEventListener("scroll", handleScrollPrefetching)
        
        //  return function () {
        //   containerPrefetching.current.removeEventListener('scroll', handleScrollPrefetching);
        //  }
        
    },[])
  return (
    <section ref={containerPrefetching} {...props}>
        {props.children}
    </section>
  )
}

export default Prefetching