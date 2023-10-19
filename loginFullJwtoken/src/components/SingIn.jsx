

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

      <div className='flex justify-center py-10 border border-black'>
        <div className=' hidden sm:block '>
          <img className=' h-full ' src="https://cdn.pixabay.com/photo/2023/09/14/19/46/elephant-8253639_640.jpg" alt="" />
        </div>

        <div className='px-10 border border-black w-[400px]  sm:w-[500px] '>
          <SingInForm />
        </div>


      </div>

    </>

  )

}

export default SingIn




{/* {user ? <Navigate to={"/"}/> : null} */ }



{/* {loading ? <span>VALIDANTO EL USUARIO</span> : null} */ }



