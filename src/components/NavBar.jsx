import SideBarUserProfile from "./SideBarUserProfile"
import NavItems from "./NavItems"
import ProductSearchBar from "./productSearchBar/ProductSearchBar"
import SingInLink from "./buttons/SingInLink"
import { useEffect, useRef, useState } from "react"
import RegisterLink from "./buttons/RegisterLink"

import { GrMenu } from "react-icons/gr";
import Logo from "./Logo"

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
        <nav style={stylesNavScroll} className=" flex items-center justify-between p-1  rounded-lg">
            <Logo className="max-h-7 rounded-full "/>

        {/* se ocultan aqui y de la misma manera en el sidebar */}
            <ul className="hidden md:flex gap-2 ">
                <NavItems />
            </ul>

            <div className="hidden sm:flex   items-center">
                <ProductSearchBar />
            </div>

            <ul className='flex gap-2  '>
                <SingInLink />
                <RegisterLink />
                <button className='dark:bg-secondary rounded p-2' onClick={() => setShowBarUser(true)}>
                    <GrMenu  className=""/>
                </button>
            </ul>


            {showsBarUser ? <SideBarUserProfile showBarSideUser={setShowBarUser} /> : null}

        </nav>
    )
}

export default NavBar