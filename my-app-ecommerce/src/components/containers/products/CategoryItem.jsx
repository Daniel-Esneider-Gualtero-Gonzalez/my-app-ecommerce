

function CategoryItem({title,img}) {
  return (
    <div className="max-w-xl m-3 hover:scale-105 hover:shadow-md duration-150 p-1 ">
        <h1 className="font-semibold text-center  overflow-clip whitespace-nowrap overflow-ellipsis">{title}</h1>
        <img className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px]  mx-auto  rounded-full  " src={img} alt="image product category" />
    </div>
  )
}

export default CategoryItem