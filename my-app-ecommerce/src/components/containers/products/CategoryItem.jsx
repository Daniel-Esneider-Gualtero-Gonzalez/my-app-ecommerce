

const categoryItem = {
  title: "CategoryTitle",
  image: "https://img.freepik.com/foto-gratis/trajes-femeninos-gafas-sol-par-sandalias-bolsa-viaje_23-2147856132.jpg?size=626&ext=jpg"
}
function CategoryItem({ title = categoryItem.title, image=categoryItem.image }) {
  return (
    <article className="border flex flex-col  rounded-lg  p-1   ">
      <img src={image} className=" mx-auto w-[50px] h-[50px]  sm:w-[100px] sm:h-[100px] rounded-full border  " alt={`image of category product ${categoryItem.title}`} />
      <h1 className="mx-auto rounded   text-center ">{title}</h1>
    </article>
  )
}

export default CategoryItem