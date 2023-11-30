import ProductCategoryList from "./ProductCategoryList"
import ProductOfWeek from "./ProductOfWeek"


function ProductsLayout() {
  return (
    <div className="border border-black">

        <h1 className="font-medium text-2xl mt-2">Category of Products</h1>
        <ProductCategoryList />
        <h2 className="mt-4 text-xl">Product of the week</h2>
        <ProductOfWeek />
    </div>
  )
}

export default ProductsLayout