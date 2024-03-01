import ScrollAnimationContainer from "../components/ScrollAnimationContainer"
import AnimationMovement from "../components/containers/componentsHome/AnimationMovement"
import Banner from "../components/containers/componentsHome/Banner"
import SectionCategoryProducts from "../components/containers/componentsHome/SectionCategoryProducts"

function Home() {
  return (
    <section className="w-full shadow-shadowSection relative h-screen  rounded-lg">
      
      <article className="mt-[10%]  my-auto ml-5 absolute border-black w-fit px-2 ">
        <h1 className="text-xl md:text-4xl   whitespace-normal max-w-[600px]">Descubre el Mundo del E-commerce: Recarga y Compra con Nosotros</h1>
        <p className="mt-3 max-w-[400px]">¡Bienvenido al emocionante mundo de compras didácticas! En este espacio interactivo, te invitamos a recargar tu saldo virtual y sumergirte en una experiencia única de comercio <span className="font-semibold">electrónico</span>.!</p>
        <button className="p-2 flex bg-blue-600  dark:bg-secondary  dark:text-black text-white font-bold hover:scale-105  transition-transform duration-200 mt-2   rounded ">Comenzar</button>
      </article>


    </section>
  )
}

export default Home