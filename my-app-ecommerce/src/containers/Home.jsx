import ScrollAnimationContainer from "../components/ScrollAnimationContainer"
import Banner from "../components/containers/componentsHome/Banner"
import SectionCategoryProducts from "../components/containers/componentsHome/SectionCategoryProducts"

function Home() {
  return (
    <div>
       <Banner />
       <div className='h-screen w-screen mb-0' >
      <div className="text-white bg-[#191919] py-20">
        <h1 className=' mt-2 text-center text-3xl font-bold'>Present your business in a whole new way</h1>
        <p className='mt-2 md:line-clamp-3 xl:line-clamp-2 xl:w-[30%] sm:w-[50%] mx-auto sm:line-clamp-2 text-center'>Qickly desing and customize responsibe mobile-first sites
          with Tailwind, the world's most popular front-end open source tooklit!
        </p>
        <button className='mt-8 border rounded hover:bg-white hover:text-black hover:scale-105 py-2 px-2 mx-auto flex border-white text-ehite'>Learn More</button>
      </div>
      <div className="grid sm:grid-cols-3">
        <div className="2xl:w-[40%] 2xl:mx-auto  md:pt-40">
          <h2 className='ml-2  font-bold mt-2 sm:mx-3'>Featured title</h2>
          <p className='ml-2 mt-4 sm:mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid quia unde eum, porro vero voluptas ipsam dignissimos corrupti quam illum?</p>
          <div className='text-blue-400 ml-2 mt-5 flex  justify-center items-center'>
          <a className='mx-2 flex'>Call to acttion <a className='my-auto ml-2 text-1xl text text-blue-400' /></a>
          
          </div>
        </div>
        <div className="2xl:w-[40%] 2xl:mx-auto md:py-40">
          <h2 className='ml-2 font-bold mt-2 sm:mx-3'>Featured title</h2>
          <p className='ml-2 mt-4 sm:mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid quia unde eum, porro vero voluptas ipsam dignissimos corrupti quam illum?</p>
          <div className='text-blue-400 mt-5 flex  justify-center items-center'>
          <a className='mx-2 flex'>Call to acttion <a className='my-auto ml-2 text-1xl text text-blue-400' /></a>
          </div>
        </div>
        <div className="2xl:w-[40%] 2xl:mx-auto md:py-40">
          <h2 className='ml-2 font-bold mt-2 sm:mx-3'>Featured title</h2>
          <p className='ml-2 mt-4 sm:mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid quia unde eum, porro vero voluptas ipsam dignissimos corrupti quam illum?</p>
          <div className='text-blue-400 mt-5 flex  justify-center items-center'>
          <a className='mx-2 flex '>Call to acttion <a className='my-auto ml-2 text-1xl text text-blue-400' /></a>
          </div>
        </div>
      </div>
      
    </div>
    <div className=" border mt-10 flex">
        <div className="border justify-center items-center flex ">
        <img className=' object-cover '  src="https://img.freepik.com/foto-gratis/vista-frontal-manos-smartphone_23-2148775906.jpg?size=626&ext=jpg&ga=GA1.2.390241129.1684151240" alt="" />
            
        </div>
        <div className="flex justify-center border sm:items-center">
          <div className=" xl:w-[40%] ">
          <h3 className='2xl:text-3xl text-center mx-auto sm:text-start sm:ml-4 font-bold'>Sku:BST-498</h3>
          <h1 className='ml-4'>Shop item template</h1>
          <span className='ml-4 font-semibold'>$ 40.000</span>
          <p className='ml-4 mt-3 sm:mr-4 xl:text-justify '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus molestias at fugit. Aut fugiat ad, inventore sit perferendis ullam adipisci suscipit dolore.</p>
          <div className='mt-2 flex justify-center items-center'>
            <p className='border w-[10px] h-[10px]'></p>
            <button className='mx-2 rounded border border-green-500 text-green-500 hover:bg-green-500 hover:text-white hover:scale-105 py-2 px-2'>Add to card</button>
          </div>
          </div>
        </div>
      </div> 
       <SectionCategoryProducts />
       
        
    </div>
  )
}

export default Home