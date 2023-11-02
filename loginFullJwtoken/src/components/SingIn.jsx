

import { Navigate, redirect } from 'react-router-dom'

import { useContextAuth } from '../contexts/contextAuth'
import SingInForm from './forms/SingInForm'




function SingIn() {
  const { user } = useContextAuth()

  // realizamos la redireccion aqui
  if (user) {
    return <Navigate to={"/"} />
  }


  return (
    <>

      <div className='flex py-10   justify-center  '>
        

        <div id='containerFormSingin' className='px-10 rounded py-10 w-full border flex items-center   sm:w-[500px]  '>
          <SingInForm />
        </div>


      </div>

    </>

  )

}

export default SingIn




{/* {user ? <Navigate to={"/"}/> : null} */ }



{/* {loading ? <span>VALIDANTO EL USUARIO</span> : null} */ }



