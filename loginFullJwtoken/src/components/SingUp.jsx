
import RegisterForm from "./forms/RegisterForm"
import MessagesWithSpiner from "./MessagesWithSpiner"

function SingUp() {

  const ANIMATION_FORM = {}
  return (
    <>
    <MessagesWithSpiner />
    
      <div className='flex h-screen  sm:justify-center sm:py-2 '>
        <div className='w-[500px] py-2 my-auto hidden md:block '>
          <img className='rounded-[800px] w-[150px] h-[150px] mx-auto ' src="https://cdn.pixabay.com/photo/2023/09/21/17/05/european-shorthair-8267220_1280.jpg" alt="" />
          <button className='mx-auto bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 hover:scale-105 flex mt-5 border px-5 items-center py-2 justify-center rounded'>Selecciona Avatar</button>
        </div>



        <div id="containerFormRegister" className='w-full my-auto border animation-form animation-duration-3000  rounded   sm:w-[500px] '>
         <RegisterForm />
        </div>


      </div>

    </>
  )
}

export default SingUp