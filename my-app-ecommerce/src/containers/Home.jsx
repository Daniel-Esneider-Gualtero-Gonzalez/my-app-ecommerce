import ScrollAnimationContainer from "../components/ScrollAnimationContainer"
import AnimationMovement from "../components/containers/componentsHome/AnimationMovement"
import Banner from "../components/containers/componentsHome/Banner"
import SectionCategoryProducts from "../components/containers/componentsHome/SectionCategoryProducts"

function Home() {
  return (
    <div className="w-full relative h-screen border border-black">
      <h1>añadir iconos de descuento entre otros en las animaciones de AnimationMovement</h1>
      <AnimationMovement backgroundColor={"bg-yellow-600"} />
      <AnimationMovement backgroundColor={"bg-purple-600"} />
      <AnimationMovement backgroundColor={"bg-green-600"}/>
      <AnimationMovement  backgroundColor={"bg-blue-600"}/>
       <div className="absolute bg-blue-300 right-0 border w-[400px] h-[40%] lg:w-[550px] rounded-tl-full lg:h-[50%] xl:h-[70%] bottom-0">
      
       </div>

       <div className="mt-[100px] ml-5 absolute border-black w-fit px-2 ">
        <h1 className="text-xl md:text-4xl   whitespace-normal max-w-[600px]">Descubre el Mundo del E-commerce: Recarga y Compra con Nosotros</h1>
        <p className="mt-3 max-w-[400px]">¡Bienvenido a nuestro emocionante mundo de compras didácticas! En este espacio interactivo, te invitamos a recargar tu saldo virtual y sumergirte en una experiencia única de comercio electrónico.!</p>
        <button className="p-2 flex bg-blue-600 text-white font-bold hover:scale-105 hover:bg-blue-700 transition-transform duration-200 mt-2 justify-center items-center border rounded ">Comenzar</button>
       </div>
       {/* <img className="absolute right-0 w-[500px]" src="https://img.freepik.com/vector-gratis/descuentos-venta-temporada-presenta-compra-visita-boutiques-compras-lujo-cupones-promocionales-reduccion-precio-ofertas-especiales-vacaciones-ilustracion-metafora-concepto-aislado-vector_335657-2766.jpg?size=626&ext=jpg" alt="" /> */}
        
    </div>
  )
}

export default Home