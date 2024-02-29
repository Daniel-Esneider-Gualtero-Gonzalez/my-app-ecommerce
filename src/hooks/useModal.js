import { useState } from "react"


function useModal() {
    const [modal,setShowModal] = useState(false)

    const openModal = ()=>  setShowModal(true)
    const closeModal = ()=> setShowModal(false)
  
    return {modal,openModal,closeModal}
}

export default useModal