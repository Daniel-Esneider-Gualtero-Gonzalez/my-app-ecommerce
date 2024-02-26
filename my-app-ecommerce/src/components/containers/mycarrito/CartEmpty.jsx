import { FaCartShopping } from "react-icons/fa6";


function CartEmpty() {
    return (
        <section className='h-screen border  rounded-lg flex flex-col gap-2 place-content-center place-items-center'>
            

            <FaCartShopping  className="text-[150px]"/>

            <h1 className="text-4xl">Tu carrrito esta vacío</h1>

            <button className="rounded p-2 border">Comprar Ahora</button>

        </section>
    )
}

export default CartEmpty