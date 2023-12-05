import ScrollAnimationContainer from "../components/ScrollAnimationContainer"
import AnimationMovement from "../components/containers/componentsHome/AnimationMovement"
import Banner from "../components/containers/componentsHome/Banner"
import SectionCategoryProducts from "../components/containers/componentsHome/SectionCategoryProducts"

function Home() {
  return (
    <div className="w-screen relative h-screen border border-black">
      <h1>añadir iconos de descuento entre otros en las animaciones de <AnimationMovement></AnimationMovement></h1>
      <AnimationMovement backgroundColor={"bg-yellow-600"} />
      <AnimationMovement backgroundColor={"bg-purple-600"} />
      <AnimationMovement backgroundColor={"bg-green-600"}/>
      <AnimationMovement />
       <div className="absolute bg-blue-300 right-0 border w-[500px] rounded-tl-full h-[90%] bottom-0">
      
       </div>
       {/* <img className="absolute right-0 w-[500px]" src="https://img.freepik.com/vector-gratis/descuentos-venta-temporada-presenta-compra-visita-boutiques-compras-lujo-cupones-promocionales-reduccion-precio-ofertas-especiales-vacaciones-ilustracion-metafora-concepto-aislado-vector_335657-2766.jpg?size=626&ext=jpg" alt="" /> */}
        
    </div>
  )
}

export default Home