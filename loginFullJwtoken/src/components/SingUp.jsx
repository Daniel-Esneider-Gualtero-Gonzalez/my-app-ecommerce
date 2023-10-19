
import RegisterForm from "./forms/RegisterForm"

function SingUp() {
  return (
    <>
      <div className='flex h-screen sm:justify-center sm:py-10 border border-black'>
        <div className='w-[600px] py-2 my-auto hidden md:block border border-black '>
          <img className='rounded-[800px] w-[200px] h-[200px] mx-auto ' src="https://cdn.pixabay.com/photo/2023/09/21/17/05/european-shorthair-8267220_1280.jpg" alt="" />
          <button className='mx-auto bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 hover:scale-105 flex mt-10 border w-[50%] items-center py-2 justify-center rounded'>Selecciona Avatar</button>
        </div>

        <div className='w-full my-auto border border-black sm:w-[600px]  sm:w-[500px] '>
         <RegisterForm />
        </div>


      </div>

    </>
  )
}

export default SingUp