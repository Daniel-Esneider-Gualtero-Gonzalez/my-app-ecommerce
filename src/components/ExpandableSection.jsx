import React, { useRef, useState, useEffect } from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function ExpandableSection({ title = "title of content", children }) {
   
    const refSectionContent = useRef()
    const [showContent, setShowContent] = useState(false)

    
    if(showContent)  {
        refSectionContent.current.style.height =  refSectionContent.current.scrollHeight + "px"
    }else{
        refSectionContent.current ?  refSectionContent.current.style.height =  "0px" : null
    }

    return (
        <article className='p-1 rounded border  '>
            <div onClick={() => setShowContent(!showContent)} className= 'cursor-pointer mb-0 flex justify-between items-center   '>
                <h1 className='mb-0'>{title}</h1>
                <button onClick={() => setShowContent(!showContent)} className='border  bg-blue-600 text-white  rounded'>{showContent ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
            </div>


            <article className={`mb-0 h-0 transitionHeight overflow-hidden`} ref={refSectionContent}>
                {children}
            </article>


        </article>
    )
}

export default ExpandableSection