

function InfoUserCard() {
  return (
    <div className=" border py-1 px-1  border-fuchsia-500 relative">
        <div className="flex   border border-green-500">
            <div className="w-[60px] border border-black">
                <img className="object-cover" src="https://th.bing.com/th/id/OIP.4j7CC_PvAEE-P1obTZP6hgHaG-?w=180&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
            </div>
            <div className="ml-1 px-1 border border-black">
                <span className="font-bold">Daniel Gualtero</span>
                <div className="text-sm">Programmin</div>
            </div>
            <button className="border border-black ml-5  w-[50px]">❌</button>
        </div>
        
    </div>
  )
}

export default InfoUserCard