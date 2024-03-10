import { useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
import IndexedSearch from '../IndexedSearch';
import OverlayScreen from '../OverlayScreen';
import useGetProducts from '../../hooks/useGetProducts';
import Loading from '../common/Loading';

function ProductSearchBar() {
  const navigate = useNavigate()
  const [search,setSearch]=useState("")
  const {loading,products,getProducts} = useGetProducts() //PARA EXTRAER LOS NOMBRES DE LOS PRODUCTOS Y PASARSELOS AL INDEXED
  const [namesProduct, setNamesProduct] = useState(null)
  const [isFocus,setIsFocus] = useState(null)
  const [isActiveOverlay, setIsActiveOverlay] = useState(false)
  const [isActiveSearchIndex, setActiveSearchIndex] = useState(false)

  
  const cancelFocus = ()=>{
    setIsFocus(false)
    setIsActiveOverlay(false)
    setActiveSearchIndex(false)
  }
  const handleFocus = () => {
    setIsFocus(true)
    setIsActiveOverlay(true)
    setActiveSearchIndex(true)
  }


  const handleSearchProducts = (search) => { 
    cancelFocus()
    // Comprueba si la ruta actual es la página de búsqueda de productos Para reemplzar la url y asi no agregar mas al history
    const isThisPathProductSearch = window.location.pathname === "/products/search"

    return navigate(`/products/search?q=${search}`, { replace: isThisPathProductSearch })

  }
  useEffect(() => {
    if (window.location.pathname === "/products/search") {

      const query = new URLSearchParams(window.location.href.split("?")[1]).get("q")
      setSearch(query)
    }

  }, [])

  // obtener los productos y extraer el nombre para el indexed 
  useEffect(()=> {
    if(!products){
      getProducts()
      return
    }
    setNamesProduct(products.map(product=> product.title))

  },[products])

  const refForm = useRef()


  const stylesFocus  = isFocus ? `p-2 h-fit bg-white border  rounded w-[400px] absolute  mt-[10%] top-0 left-0 right-0 bottom-0` : ''


  return (
    <>
      <form ref={refForm} onSubmit={(event)=> {
        event.preventDefault()
        handleSearchProducts(search)
      }}  onFocus={handleFocus} className={`${isFocus && stylesFocus} flex flex-col  z-10  mx-auto  rounded `}>
       
       { isFocus && <button onClick={()=> cancelFocus()} className='self-end border -mt-10 -mr-10 p-2  rounded-full h-fit bg-red-600 text-white text-xl '><MdCancel /></button>}

        <div className='flex'>
          <input  onChange={(e)=> setSearch(e.target.value)} value={search}  placeholder="Search Products" id='searchProduct' name="searchProduct" className='w-full   border-b focus:border-b focus:border-t-0 focus:border-l-0 focus:border-r-0  border-blue-600  outline-none   ' type="text" />
          <button className=" bg-blue-600 text-white  text-xl  "><CiSearch className="" /></button>
        </div>

        {isActiveSearchIndex && <ul  onClick={(e)=> {
          const search = e.target.textContent
          if(!search) return
          setSearch(search)
          handleSearchProducts(search)
        }} className='h-[220px] rounded mt-2 overflow-auto  text-sm'>
         {namesProduct && <IndexedSearch  Element="li" className='w-full hover:bg-blue-100 cursor-pointer' search={search} bdCoicidencias={namesProduct} /> }
         {loading && <Loading  className="w-[35px] mx-auto mt-2 h-[35px]   "/>}

        </ul>}

      </form>

      {isActiveOverlay && <OverlayScreen  zIndex="50" />}
    </>
  )
}



export default ProductSearchBar