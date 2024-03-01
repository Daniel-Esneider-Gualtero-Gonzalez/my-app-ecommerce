import { useRef } from "react";
import { MdDelete } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";

const product = {
  title: "title Product",
  description: "Aquí ira un breve texto de la descripcion de este producto",
  price: 100,
  image: "https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}

function ItemsInCart({ title = product.title, image = product.image, price = product.price, cant = 1, keyItemProduct = {}, onDeleteCantProduct = () => { }, onAddCantProduct = () => { }, onDeleteProduct = () => { }, }) {

  const refItem = useRef()
  const onDelete = (e) => {

    function deleteElement() {
      this.removeEventListener('transitionend', deleteElement);
      onDeleteProduct()
    }

    refItem.current.addEventListener('transitionend', deleteElement);
    refItem.current.classList.add("animationDeleteProduct")

  }


  return (
    <>
      <article key={keyItemProduct} ref={refItem} className='w-full border flex justify-between  gap-1  p-1     rounded'>

        <img className=' w-[100px] h-[100px] rounded ' src={image} alt={`imagen del producto ${title}`} />

        <div className='max-w-[60%]  flex flex-col   p-2'>
          <h1 className='font-normal  '>{title}</h1>

          <div className="flex-1  flex gap-2 text-md items-center">
            <button onClick={onDeleteCantProduct} className={`${cant === 1 && 'collapse'} border  rounded p-1`}><GrSubtractCircle /></button>
            <span>{cant}</span>
            <button onClick={onAddCantProduct} className="border rounded p-1"><IoAddCircle /></button>
          </div>
        </div>

        <span className=' h-fit my-auto font-semibold'>${price}</span>

        <button onClick={onDelete} className='border  h-fit  rounded btn-delete  w-10  '>
          <MdDelete />
        </button>
      </article>


    </>
  )
}

export default ItemsInCart