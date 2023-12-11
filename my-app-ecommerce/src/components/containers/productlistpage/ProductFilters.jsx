

function ProductFilters() {
  return (
    <>
      Products Filter
      <div className="flex border ">
        <h1>Price:</h1>
        <input onChange={(e)=>{console.log("filter product price", e.target.value)}} className="ml-5" max={10} type="range" />
      </div>
      <span>Category</span>
      <div>
        <input type="checkbox" name="" id="" />
      </div>
    </>
  )
}

export default ProductFilters