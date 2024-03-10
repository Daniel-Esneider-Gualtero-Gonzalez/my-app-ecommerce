import { IoAddSharp } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";

function ControlCantItemsProduct({ cant = 0, onDeleteCantProduct = () => { }, onAddCantProduct = () => { } }) {
    return (
        <>
            { cant > 0 &&
                <div className="flex gap-2 text-md items-center">
                    <button onClick={onDeleteCantProduct} className={`${cant <= 1 && 'collapse'} border bg-red-600 text-white  rounded p-1`}><RiSubtractLine /></button>
                    <span>{cant}</span>
                    <button onClick={onAddCantProduct} className="border bg-green-600 text-white rounded p-1"><IoAddSharp /></button>
                </div>
            }
        </>
    )
}

export default ControlCantItemsProduct