

const categoryItem = {
  title: "CategoryTitle",
  image: "https://img.freepik.com/foto-gratis/trajes-femeninos-gafas-sol-par-sandalias-bolsa-viaje_23-2147856132.jpg?size=626&ext=jpg"
}
function CategoryItem({ title = categoryItem.title, image=categoryItem.image }) {
  return (
    <article className="w-[150px] hover:border-blue-600  border flex flex-col  rounded-lg  p-1   ">
      <img src={image} className=" mx-auto rounded-full  h-[50%] w-[50%]   border  " alt={`image of category product ${categoryItem.title}`} />
      <h1 className="mx-auto rounded   text-center whitespace-nowrap ">{title}</h1>
    </article>
  )
}

export default CategoryItem