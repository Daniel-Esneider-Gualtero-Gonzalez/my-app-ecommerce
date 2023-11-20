import React, { useEffect } from 'react'

function Loading({center = true, className = ""}) {
    

    if(center) return <div class="loading w-[50px] z-50 h-[50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-green-200  absolute "></div>
    
    return <div  className={`loading ${className}`}></div>
}

export default Loading