import { useAuthUser } from '../hooks/useAuthUser'
import { Navigate } from 'react-router-dom'
import { useContextAuth } from '../contexts/contextAuth'
import SingInForm from './forms/SingInForm'
import Loading from './common/Loading'




function SingIn() {
  const { user } = useContextAuth()

  // realizamos la redireccion aqui
  if (user) {
    return <Navigate to={"/"} />
  }
  const { loading, error, userToken, getAuthUser } = useAuthUser()


  // podemos parsar una funcion de callback que recibira la data en objeto del form
  const onSubmitForm = (data) => {
    getAuthUser(data)
  }


  return (
    <>

      <section className='flex p-1  sm:mx-auto sm:w-[50%] md:w-[30%]  border rounded-lg justify-center '>
        <SingInForm submitForm={onSubmitForm} />
      </section>

    </>

  )

}

export default SingIn




