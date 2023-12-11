import { useLocation } from "react-router-dom"


function ProductListPageLayout() {
  const { search } = useLocation()
  console.log("bucamos el parametro de consult que es un nombre de producto")
  const query = new URLSearchParams(search).get("q")

  return (
    <>

      <div className="grid  grid-cols-3">
        <div className=" min-h-[200px] bg-blue-500 p-4">
          {/* <!-- Contenido de la primera columna (ancho 2) --> */}
        </div>
        <div className="bg-green-500 col-span-2 border border-black  p-4">  
          {/* <!-- Contenido de la segunda columna (ancho 1) --> */}
        </div>
        {/* <div className="bg-red-500  p-4">
          
        </div> */}
      </div>


      <div className="mt-3 border border-red-600">
        <h1 className="text-5xl">Resultados para <span className="border-b bg-green-300 border-black">{query}</span></h1>

      </div></>
  )
}

export default ProductListPageLayout