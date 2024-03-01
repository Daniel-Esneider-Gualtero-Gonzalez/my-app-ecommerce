import { MdCancel } from "react-icons/md";

const modal = {
    id: "",
    title: "Titulo del modal",
    status: false,
    callbackCancel: () => { },
    callbackAcept: () => { }

}

function Modal({ id=modal.id, title = modal.title, status = modal.status, callbackCancel = modal.callbackCancel , callbackAcept = modal.callbackAcept, children }) {

    if (!status) return null
    

    return (
        <dialog  id={id} className='modal  shadow-lg gap-2  p-2 activeModal  z-50 fixed flex flex-col mx-auto my-auto border rounded-lg     left-0 right-0 bottom-0 top-0    w-[340px] sm:w-[500px] h-[340px] md:w-[600px] md:h-[400px] '>
            <div className="h-fit flex  items-center justify-between">
            <h1 className='text-md xl:text-xl whitespace-nowrap text-ellipsis overflow-hidden  text-center   font-semibold '>{title}</h1>
            <button className="border rounded text-md xl:text-xl bg-red-600 text-white" onClick={() => callbackCancel()} > <MdCancel /> </button>
            </div>


            <article className='relative  overflow-auto'>{children}</article>

            <div className=' flex gap-1 self-end items-center mt-auto '>

                <button onClick={(e) => callbackAcept()} className='border  flex justify-center items-center  rounded border-green-600 bg-transition hover:bg-green-600 hover:text-white '>Aceptar</button>
                <button onClick={() => callbackCancel()} className='border flex justify-center items-center  rounded border-red-600 bg-transition hover:bg-red-600 hover:text-white '>Cancelar</button>

            </div>



        </dialog>
    )
}

export default Modal