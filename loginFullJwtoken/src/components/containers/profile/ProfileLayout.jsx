import SideBar from "../../SideBar"


function ProfileLayout() {
  return (
    <div className='grid grid-cols-3'>

      <div className='border '>
        <SideBar screenFull={true} />
      </div>
      <div className='border grid col-span-2 '>

        <div className="border-red-600 gap-1  grid grid-cols-1 border  ">
          
          <div className="h-fit border-black border   flex">
          <img className="border border-black h-[200px]  animationTop " src="https://api.multiavatar.com/Binx.png" alt="" />

          <div className="animationRight   text-2xl h-fit mt-10 ml-10 border border-black">
              <span className="font-bold">Daniel Esneider Gualtero Gonzalez</span>
              <div className="text-sm">Programmin</div>
            </div>

          </div>

          






        </div>

      </div>



    </div>
  )
}

export default ProfileLayout