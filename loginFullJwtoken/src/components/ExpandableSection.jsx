import React, { useRef, useState ,useEffect} from 'react'

function ExpandableSection({title="title of content",children}) {
    
    const refSectionContent = useRef()
    const [showContent,setShowContent] = useState(false)
    

    useEffect(()=>{

        if(showContent){
            
            refSectionContent.current.style.height = `${refSectionContent.current.scrollHeight}px`
           
        }else{
            refSectionContent.current.style.height = "0px"
            
        }

    },[showContent])

  return (
    <div className=' rounded border my-1 bg-gray-200 '>
        <div className='flex ml-2  items-center  '>
        <h1>{title}</h1>
        <button onClick={()=> setShowContent(!showContent)} className='ml-5 rounded p-2  text-xl'>{showContent ? "▲"  : "▼"}</button>
        </div>

        {/* se realiza el calculo de la altura del contenido dentro de section para poder realizar la transition o la otra seria definir la altura padre para que la transition funcione con % */}
        <section className={`ml-8  transitionHeight overflow-hidden`} ref={refSectionContent}>
        {children}
        </section>

        
    </div>
  )
}

export default ExpandableSection