

function CategoryItem({title,img}) {
  return (
    <div className=" p-1 w-[200px]">
        <h1 className="font-semibold text-center  overflow-clip whitespace-nowrap overflow-ellipsis">{title}</h1>
        <img className="w-[150px] mx-auto h-[150px] rounded-full border border-black" src={img} alt="image product category" />
    </div>
  )
}

export default CategoryItem