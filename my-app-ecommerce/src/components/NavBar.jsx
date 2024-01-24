import SideBarUserProfile from "./SideBarUserProfile"
import NavItems from "./NavItems"
import ProductSearchBar from "./productSearchBar/ProductSearchBar"
import BtnLogin from "./buttons/BtnLogin"
import { useEffect, useRef, useState } from "react"
import BtnRegister from "./buttons/BtnRegister"

import { GrMenu } from "react-icons/gr";

function NavBar() {
    const [showsBarUser, setShowBarUser] = useState(false)
    const refScroll = useRef(0)
    const [stylesNavScroll, setStylesNavScroll] = useState(null)

    useEffect(() => {
        window.document.addEventListener("scroll", () => {
            if (window.scrollY === 0) return setStylesNavScroll(null)
            if (window.scrollY < refScroll.current) {
                setStylesNavScroll(
                    { 'position': 'sticky', 'top': '0', 'zIndex': '999' }
                )
            } else {
                setStylesNavScroll(null)
            }

            refScroll.current = window.scrollY


        })
    }, [])

    return (
        <nav style={stylesNavScroll} className=" grid grid-cols-3 lg:grid-cols-4 p-4  bg-blue-300 py-2 border border-black">


            <div className='flex lg:cdjustify-center items-center border'>
                <button className='p-1 lg:hidden  w-fit h-fit rounded flex justify-center items-center bg-white mt-1 border  text-2xl ' onClick={() => setShowBarUser(true)}>
                    <GrMenu className=" text-[30px]" />
                </button>
                <img className=' hidden lg:block h-[40px] w-[60px]   md:rounded-none  ' src="https://cdn.pixabay.com/photo/2023/08/29/19/42/goose-8222013_1280.jpg" alt="" />
            </div>


            <div className=' border flex justify-center p-1 items-center'>
                <ul className=" hidden lg:block lg:flex">
                    <NavItems />
                </ul>

                <img className=' lg:hidden rounded-full h-[50px] w-[50px]   md:rounded-none  ' src="https://cdn.pixabay.com/photo/2023/08/29/19/42/goose-8222013_1280.jpg" alt="" />

            </div>

            <div className="flex  justify-center border p-1 items-center">
                <ProductSearchBar />
            </div>


            <div className='border hidden lg:block lg:flex gap-1'>


                <BtnLogin />
                <BtnRegister />


                <button className='p-1 w-full  md:w-fit md:h-fit rounded flex justify-center items-center bg-white mt-1 border  text-2xl ' onClick={() => setShowBarUser(true)}>
                    <GrMenu className=" text-[30px]" />
                </button>

            </div>


            {showsBarUser ? <SideBarUserProfile  showBarSideUser={setShowBarUser} /> : null}





        </nav>
    )
}

export default NavBar
