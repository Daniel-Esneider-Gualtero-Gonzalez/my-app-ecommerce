
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom'
import { useContextCart } from "../../contexts/contextCart";

function BuyButton() {
   const {productsInCart} = useContextCart()
  const location = useLocation()
  
  const cantProducts = productsInCart.length
  
  return (
    <>
      {location.pathname !== "/mi-carrito" ? <Link to={"/mi-carrito"}>
            <div className="fixed h-fit  hover:scale-105  right-3 bottom-3 z-49 ">
             
              
              <button className='relative mt-3 bg-blue-600 text-white  dark:bg-secondary dark:text-black    rounded-full      p-3'>
              <span className="font-bold text-black dark:bg-white rounded-full  absolute right-1 top-0 -mt-5">{cantProducts}</span>
                <FaCartShopping className="text-2xl" />
              </button>

            </div>
          </Link> : null}
      </>


  )
}

export default BuyButton