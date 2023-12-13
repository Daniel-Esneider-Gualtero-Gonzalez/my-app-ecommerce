import React, { useEffect, useRef } from 'react'

// este componente realiza la logica del prefecthing con evnetos y ejecutando el prefething
function Prefetching({className="",children}) {
    let isPrefetching = false
    const containerPrefetching = useRef()

    useEffect(()=> {

        const eventoPrefetchingContainer = containerPrefetching.current.addEventListener("scroll",(e)=>{
           
            const {scrollHeight,scrollTop,clientHeight} = e.target

            const scrollCurrent = scrollTop + clientHeight

            const pixelesBeforeFetching = 400
            
            if(scrollCurrent >=  scrollHeight - pixelesBeforeFetching && isPrefetching === false) {
              console.log("hacer el prefetching")
              isPrefetching = true
            }
        })
        
         
        
    },[])
  return (
    <div ref={containerPrefetching} className={className}>
        {children}
    </div>
  )
}

export default Prefetching