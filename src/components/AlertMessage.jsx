import { useRef } from "react";
import { BsXLg } from "react-icons/bs";

function AlertMessage({ warning = Boolean, error = Boolean, succes = Boolean, textMessage = "" , onDissmmisAlert=()=>{}}) {
  const refAlert = useRef()

  const styles = warning === true ? 'bg-yellow-400 ' : error === true ? 'bg-red-400' : succes === true ? 'bg-green-400' : null
  const dismmisAlert = ()=>{
    refAlert.current.removeEventListener('transitionend', dismmisAlert);
    // ejecutamos callback de onDissmis que pasen por prop
    onDissmmisAlert()

  }
  const onDissmiss = ()=>{
    refAlert.current.classList.add('animationDissmissAlert')
    refAlert.current.addEventListener('transitionend', dismmisAlert);
  }

  return (
    <div ref={refAlert} className={`w-fit flex self-end items-center justify-between ${styles} rounded-lg p-3 mb-4 text-sm sm:text-md md:text-lg text-white`} role="alert">
        <span className="font-semibold ">{textMessage}</span>
      <button onClick={onDissmiss} className="ml-4  text-white rounded h-fit p-1"><BsXLg className="" /></button>
    </div>
  )
}

export default AlertMessage

