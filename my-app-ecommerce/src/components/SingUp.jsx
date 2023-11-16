
import { useState } from "react"
import useModal from "../hooks/useModal"
import Modal from "./common/Modal"
import RegisterForm from "./forms/RegisterForm"
import MessagesWithSpiner from "./AlertMessage"
import useForm from "../hooks/useForm"
import { useRegisterUser } from "../hooks/useAuthUser"
import { Navigate } from "react-router-dom"
import useGetAvatars from "../hooks/useGetAvatars"
import AlertMessage from "./AlertMessage"


function SingUp() {

  const { loading, error, isRegister, handleRegisterUser } = useRegisterUser()
  const [avatar, setAvatar] = useState()
  const { modal, openModal, closeModal } = useModal()
  const { loading: avatarsLoading, error: avatarsError, avatars } = useGetAvatars()



  if (loading) {
    return <span>REGISTRANDO USUARIO POR FAVOR ESPERE</span>
  }

  if (isRegister) {

    return <Navigate to={"/login"} />

  }

  return (
    <>
      
      
      {isRegister ? <AlertMessage succes={true} textMessage="Usuario Registrado exitosamente" /> : null}
      {error ? <AlertMessage error={true} textMessage={`${error}`} /> : null}

     

      <Modal statusModal={modal} title="choose Avatar" closeModal={closeModal} >
        <div className="flex flex-wrap   mx-auto justify-center">
          {avatars ? avatars.map((avatar, index) => {
            const styleAvarSele = index === avatar ? "bg-gray-600 " : null
            return <img key={avatar.name} onClick={() => setAvatar(index)} className={`hover:scale-110 w-[100px] mx-1 my-1 ${styleAvarSele}`} src={avatar.image} alt="" />
          }) : null}
        </div>
      </Modal>


      <div className='flex h-screen  sm:justify-center sm:py-2 '>
        <div className='w-[500px] py-2 my-auto hidden md:block '>
          <img className='rounded-[800px] w-[150px] h-[150px] mx-auto ' src={avatar >= 0 ? `${avatars[avatar].image}` : "https://cdn.pixabay.com/photo/2023/09/21/17/05/european-shorthair-8267220_1280.jpg"} alt="" />
          <button disabled={avatarsLoading ? true : null} onClick={() => openModal()} className='mx-auto bg-blue-500 text-white font-bold text-md hover:bg-blue-600 hover:scale-105 flex mt-5 border px-5 items-center py-2 justify-center rounded'>
            {avatarsLoading ? '..cargando avatars' : 'Selecciona Avatar'}
          </button>
        </div>



        <div id="containerFormRegister" className='w-full my-auto border animation-form animation-duration-3000  rounded   sm:w-[500px] '>
          <RegisterForm handleRegisterUser={handleRegisterUser} />
        </div>


      </div>

    </>
  )
}

export default SingUp