
import { useEffect, useState } from "react"
import useModal from "../hooks/useModal"
import Modal from "./common/Modal"
import RegisterForm from "./forms/RegisterForm"
import useForm from "../hooks/useForm"
import { useRegisterUser } from "../hooks/useAuthUser"
import { Navigate } from "react-router-dom"
import useGetAvatars from "../hooks/useGetAvatars"
import Loading from "./common/Loading"
import AvatarImage from "./AvatarImage"


function SingUp() {

  const { loading, error, isRegister, handleRegisterUser } = useRegisterUser()
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

      <section className=" md:h-[400px] grid md:place-content-center gap-1 sm:grid-cols-2 p-1 sm:mx-auto  sm:w-[90%]  xl:w-[50%] border rounded-lg  ">
        {loading ? <Loading center={true} /> : null}
        {isRegister ? <AlertMessage succes={true} textMessage="Usuario Registrado exitosamente" /> : null}
        {error ? <AlertMessage error={true} textMessage={`${error}`} /> : null}



        <Modal status={modal} callbackAcept={onAceptModalAvatar} callbackCancel={onCancelModal} title="Selecciona tu avatar" closeModal={closeModal} >
          <div className="grid grid-cols-4 gap-1">
            { avatars && avatars.length > 0 && avatars.map((numAvatar) => {
              return <AvatarImage key={numAvatar} className="cursor-pointer" />
            })}

          </div>
        </Modal>






        <div className='grid place-content-center '>
          <img className='rounded-full w-[80px] h-[80px]  sm:w-[100px] sm:h-[100px] mx-auto ' src={avatar >= 0 ? `${avatars[avatar].image}` : "https://cdn.pixabay.com/photo/2023/09/21/17/05/european-shorthair-8267220_1280.jpg"} alt="" />
          <button disabled onClick={() => openModal()} className='mx-auto text-sm flex  border items-center justify-center rounded bg-blue-500 text-white font-bold  hover:bg-blue-600 '>
            {avatarsLoading ? '..cargando avatars' : 'Selecciona Avatar'}
          </button>
        </div>



        <article className="h-fit">
          <RegisterForm submitForm={onSubmitForm} />
        </article>


      </section>
    </>
  )
}

export default SingUp