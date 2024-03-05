import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";


function CartEmpty() {
    return (
        <section className='h-screen   shadow-shadowSection rounded-lg flex flex-col gap-2 place-content-center place-items-center'>
            

            <FaCartShopping  className="text-[150px]"/>

            <h1 className="text-4xl">Tu carrrito esta vacío</h1>

            <Link to={"/products/search/"} className=" bg-blue-600 text-white rounded p-2 ">Comprar Ahora</Link>

        </section>
    )
}

export default CartEmpty