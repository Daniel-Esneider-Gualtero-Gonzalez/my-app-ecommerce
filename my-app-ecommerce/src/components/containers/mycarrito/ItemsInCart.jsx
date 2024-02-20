import { useRef } from "react";
import { MdDelete } from "react-icons/md";

function ItemsInCart() {
  const refItem = useRef()
  const onDelete = (e)=>{
    
    
    function deleteElemet(){
      
      this.removeEventListener('transitionend', deleteElemet);
      refItem.current.remove()
      
      
    }
   
    refItem.current.addEventListener('transitionend', deleteElemet);
    refItem.current.classList.add("animationDeleteProduct")
    
  }
  return (
    <>
      <article ref={refItem} className='border flex justify-between p-1     rounded'>

        <img className='w-[100px] h-[100px] rounded' src="https://img.freepik.com/foto-gratis/productos-belleza-surtido-destinatarios-sobre-piedras-grises_23-2148761390.jpg?size=626&ext=jpg" alt="" />

        <div className=''>
          <h1 className='font-normal'>Name product</h1>
          <span className='text-sm'>description</span>
        </div>

        <div className=" flex items-center">
          <button>-</button> <input className='border rounded w-6 h-6' type="text" /> <button>+</button>
        </div>


        <span className='  h-fit my-auto'>$450</span>

        <button onClick={onDelete} className='h-fit  border rounded  w-10   hover:bg-red-600 hover:text-white'>
          <MdDelete />
        </button>
      </article>









    </>
  )
}

export default ItemsInCart