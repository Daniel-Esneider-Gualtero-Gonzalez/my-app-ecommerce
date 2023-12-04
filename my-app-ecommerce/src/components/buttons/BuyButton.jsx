import { useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom'

function BuyButton() {

  const location = useLocation()
  
  return (
    <>
      {location.pathname !== "/mi-carrito" ? <Link to={"/mi-carrito"}>
            <div className="fixed  hover:scale-105  right-3 bottom-3 z-50 ">
             
              <div className="absolute   top-0 right-1 ">
                <span className=" hover:sca  bg-white font-semibold text-black top-0 left-0  w-fit h-fit text-sm rounded-full">100</span>
              </div>
              <button className='border mt-3  bg-blue-500  text-white  rounded-full hover:bg-green-600 hover:text-white    p-3'>
                <FaCartShopping className="text-2xl" />
              </button>

            </div>
          </Link> : null}
      </>


  )
}

export default BuyButton