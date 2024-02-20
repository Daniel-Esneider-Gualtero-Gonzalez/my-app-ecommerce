
import { MdCancel } from "react-icons/md";

function InfoUserCard({ showBarSideUser }) {
  return (
    <article className=" flex justify-between items-center">
      <div className="flex flex-col">
        <span className="">Daniel Gualtero</span>
        <span className="text-sm">Programmin</span>
      </div>
      <button onClick={() => showBarSideUser(false)} className="border border-black rounded-lg h-fit hover:bg-red-600 hover:text-white text-xl  "><MdCancel/></button>
    </article>
  )
}

export default InfoUserCard