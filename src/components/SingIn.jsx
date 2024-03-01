import { useAuthUser } from '../hooks/useAuthUser'
import { Navigate } from 'react-router-dom'
import { useContextAuth } from '../contexts/contextAuth'
import SingInForm from './forms/SingInForm'
import AlertMessage from '../components/AlertMessage'





function SingIn() {
  const { user } = useContextAuth()

  // realizamos la redireccion aqui
  if (user) {
    return <Navigate to={"/"} />
  }
  const { loading, error, clearError ,userToken, getAuthUser } = useAuthUser()


  // podemos parsar una funcion de callback que recibira la data en objeto del form
  const onSubmitForm = (data) => {
    getAuthUser(data)
  }
  


  return (
    <>
      {error && <AlertMessage error={true} textMessage={`${error.message}`}  onDissmmisAlert={clearError}/>}
      <section className='flex p-1  sm:mx-auto sm:w-[50%] md:w-[30%]  border rounded-lg justify-center '>
        <SingInForm isLoading={loading} submitForm={onSubmitForm} />
      </section>


    </>

  )

}

export default SingIn




