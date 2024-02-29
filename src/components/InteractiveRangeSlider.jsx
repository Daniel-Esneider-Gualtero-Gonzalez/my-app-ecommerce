import React, { useRef } from 'react'

function InteractiveRangeSlider({initialValue=0,valueMax=100,handleChangeInput = ()=>{} }) {
    const refSpanInfo = useRef()
    let xspan = 0
    const refValueInput = useRef(0)
  
    const handleChangeInputRange = (e)=>{
      const value = e.target.value
      refValueInput.current = value
      refSpanInfo.current.style.transform = `translateX(${xspan}px)`;
      handleChangeInput(value)

    }
    const handleMouseMove = (event)=>{
      const rect = event.target.getBoundingClientRect();
      const mouseX = Math.round(event.clientX - rect.left);

      const container  = event.target.parentNode
      const maxX = container.offsetWidth - refSpanInfo.current.offsetWidth;
      
      xspan = Math.min(Math.max(0, mouseX), maxX);
      
    }

    const onChangeResize = ()=>{
      const container  = refSpanInfo.current.parentNode
      const maxX = container.offsetWidth - refSpanInfo.current.offsetWidth;
      xspan = Math.min(xspan, maxX);
      refSpanInfo.current.style.transform = `translateX(${xspan}px)`;

    }
    
  return (
    <div onResize={onChangeResize} className='relative flex flex-col w-[200px]  '>
        <span ref={refSpanInfo} className="bg-green-100 text-green-800 text-xs w-fit border flex font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{refValueInput.current}</span>
        <input onMouseMove={handleMouseMove} onChange={handleChangeInputRange} type="range" name="rangeValue" value={refValueInput ? refValueInput.current : initialValue}  max={valueMax} id="" />
    </div>
  )
}

export default InteractiveRangeSlider