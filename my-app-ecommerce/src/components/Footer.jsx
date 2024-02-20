import { useEffect, useRef } from "react"
import { animationBurbuja } from "../utils/animations/burbuja"


function Footer() {


  return (
    <>
      <footer className="border flex  flex-col gap-1 rounded lg p-1 md:flex-row md: justify-between">
        
          <span >© 2024 <a href="https://flowbite.com/" >My ecommerce</a>. Casi todos los derechos reservados.</span>
          <ul className="flex flex-wrap items-center  text-sm ">
            <li>
              <a href="#" >Products</a>
            </li>
            <li>
              <a href="#" >Privacy Policy</a>
            </li>
            <li>
              <a href="#" >Licensing</a>
            </li>
            <li>
              <a href="#" >Contact </a>
            </li>
          </ul>
   
      </footer>

    </>
  )
}

export default Footer