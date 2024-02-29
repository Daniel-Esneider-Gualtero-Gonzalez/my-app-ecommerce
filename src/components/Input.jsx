import { useState } from "react"


function Input({className, type="text", onChange=null,...props}) {
  
  return (
    <input {...props} onChange={onChange}     type={type} className={`${className} px-2  border rounded  border-black focus:outline-none focus:border-blue-500 `} />
  )
}

export default Input