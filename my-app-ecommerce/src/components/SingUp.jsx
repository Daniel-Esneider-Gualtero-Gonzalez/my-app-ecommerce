
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
import Loading from "./common/Loading"


function SingUp() {

  const { loading, error, isRegister, handleRegisterUser } = useRegisterUser()
  const [avatar, setAvatar] = useState()
  const { modal, openModal, closeModal } = useModal()
  const { loading: avatarsLoading, error: avatarsError, avatars } = useGetAvatars()

  if (isRegister) {

    return <Navigate to={"/login"} />

  }

  return (
    <>
      
     {loading ? <Loading center={true} />  : null}
      {isRegister ? <AlertMessage succes={true} textMessage="Usuario Registrado exitosamente" /> : null}
      {error ? <AlertMessage error={true} textMessage={`${error}`} /> : null}

     

      <Modal statusModal={modal} title="choose Avatar" closeModal={closeModal} >
        <div className="flex flex-wrap   mx-auto justify-center">
          {avatars ? avatars.map((avatar, index) => {
            const styleAvarSele = index === avatar ? "bg-gray-600  " : null
            return <img key={avatar.name} onClick={() => setAvatar(index)} className={` w-[100px] mx-1 my-1 ${styleAvarSele}`} src={avatar.image} alt="" />
          }) : null}
        </div>
      </Modal>


      <div className='w-full mt-10 lg:mt-14 place-content-center gap-1  grid xl:grid-cols-2 sm:py-2 '>
        <div className='my-2 lg:mb-4 grid place-content-center  '>
          <img className='rounded-[800px] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] mx-auto ' src={avatar >= 0 ? `${avatars[avatar].image}` : "https://cdn.pixabay.com/photo/2023/09/21/17/05/european-shorthair-8267220_1280.jpg"} alt="" />
          <button disabled={avatarsLoading ? true : null} onClick={() => openModal()} className='mx-auto bg-blue-500 text-white font-bold text-md hover:bg-blue-600 hover:scale-105 flex mt-5 border p-1 sm:px-5 items-center py-2 justify-center rounded'>
            {avatarsLoading ? '..cargando avatars' : 'Selecciona Avatar'}
          </button>
        </div>



        <div id="containerFormRegister" className='w-full my-auto border animation-form animation-duration-3000  rounded    '>
          <RegisterForm handleRegisterUser={handleRegisterUser} />
        </div>


      </div>

    </>
  )
}

export default SingUp