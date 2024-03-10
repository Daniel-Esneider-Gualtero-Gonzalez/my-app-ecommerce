import { useContextAuth } from "../contexts/contextAuth";
import { MdCancel } from "react-icons/md";

function InfoUserCard({ showBarSideUser }) {
  const {user} = useContextAuth()
  return (
    <article className=" flex justify-between items-center">
      <div className="flex flex-col">
        {user && <span className="text-xl  ">{user.names} {user.last_name}</span>}
        
      </div>
      <button onClick={() => showBarSideUser(false)} className="p-2  rounded-lg h-fit bg-white text-red-600 hover:bg-red-600 hover:text-white text-xl  "><MdCancel/></button>
    </article>
  )
}

export default InfoUserCard