
import { MdCancel } from "react-icons/md";

function InfoUserCard({ showBarSideUser }) {
  return (
    <article className=" flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-xl ">Daniel Gualtero</span>
        <span className="text-sm text-white dark:text-secondary ">Programmin</span>
      </div>
      <button onClick={() => showBarSideUser(false)} className="p-2  rounded-lg h-fit bg-white text-red-600 hover:bg-red-600 hover:text-white text-xl  "><MdCancel/></button>
    </article>
  )
}

export default InfoUserCard