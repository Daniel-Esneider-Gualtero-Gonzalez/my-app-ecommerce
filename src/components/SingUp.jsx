
import { useState } from "react"
import useModal from "../hooks/useModal"
import Modal from "./common/Modal"
import RegisterForm from "./forms/RegisterForm"
import AlertMessage from '../components/AlertMessage'
import { useRegisterUser } from "../hooks/useAuthUser"
import { Navigate } from "react-router-dom"
import useGetAvatars from "../hooks/useGetAvatars"
import AvatarImage from "./AvatarImage"


function SingUp() {

  const { loading, error, clearError, isRegister, handleRegisterUser } = useRegisterUser()
  const [avatar, setAvatar] = useState()
  const { modal, openModal, closeModal } = useModal()
  const { loading: avatarsLoading, error: avatarsError, avatars } = useGetAvatars()

  if (isRegister) {

    return <Navigate to={"/login"} />

  }

  const onSubmitForm = (data) => {
    handleRegisterUser(data)
  }

  const onAceptModalAvatar = () => {
    alert("modal seleccionado")
    closeModal()
  }

  const onCancelModal = () => {
    closeModal()
  }




  return (
    <>
      {isRegister ? <AlertMessage succes={true} textMessage="Usuario Registrado exitosamente" /> : null}
      {error ? <AlertMessage onDissmmisAlert={clearError} error={true} textMessage={`${error}`} /> : null}

      <section className=" md:h-[400px] grid md:place-content-center gap-1 sm:grid-cols-2 p-1 sm:mx-auto  sm:w-[90%]  xl:w-[50%] border rounded-lg  ">

        <Modal status={modal} callbackAcept={onAceptModalAvatar} callbackCancel={onCancelModal} title="Selecciona tu avatar" closeModal={closeModal} >
          <div className="grid grid-cols-4 gap-1">
            {avatars && avatars.length > 0 && avatars.map(avatar => {
              return <AvatarImage key={avatar.name} name={avatar.name} image={avatar.image} className="cursor-pointer hover:rounded-2xl hover:border-blue-600 hover:border" />
            })}

          </div>
        </Modal>



        <div className='grid place-content-center '>
          <img className='rounded-full w-[80px] h-[80px]  sm:w-[100px] sm:h-[100px] mx-auto ' src={avatar >= 0 ? `${avatars[avatar].image}` : "https://cdn.pixabay.com/photo/2023/09/21/17/05/european-shorthair-8267220_1280.jpg"} alt="" />
          <button disabled={avatarsLoading ? true : false} onClick={() => openModal()} className='p-1 mt-1 mx-auto text-sm flex  dark:bg-secondary dark:text-black items-center justify-center rounded bg-blue-500 text-white font-semibold   '>
            {avatarsLoading ? '..cargando avatars' : 'Selecciona Avatar'}
          </button>
        </div>



        <article className="h-fit">
          <RegisterForm isLoading={loading} submitForm={onSubmitForm} />
        </article>


      </section>
    </>
  )
}

export default SingUp