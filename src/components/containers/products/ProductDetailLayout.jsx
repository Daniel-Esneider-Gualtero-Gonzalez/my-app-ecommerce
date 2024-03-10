import ProductDetails from "./ProductDetails"
import useGetProducts from "../../../hooks/useGetProducts"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import ProductDetailsSkeleton from "./ProductDetailsSkeleton"
import { useContextCart } from "../../../contexts/contextCart"
import ProductCardList from "./ProductCardList"

function ProductDetailLayout() {
  const location = useLocation()
  const { loading, error, products, getProducts } = useGetProducts()
  const [relatedProducts,setRelatedProduct] = useState(null)
  const [item, setItem] = useState(null)
  const [notFoundItem, setNotFoundItem] = useState(false)

  const { addProductCart, deleteProductCart, isProductsInCart, getCantItemProduct,
    addCantItemProduct, deleteCantItemProduct
  } = useContextCart()

  useEffect(() => {
    if (!products) {
      getProducts()
      return
    }
    const getIdItem = new URLSearchParams(location.search)
    const idItem = Number(getIdItem.get("id_item"))

    const item = products.find(product => product.id === idItem)
    if (!item || item === undefined) return setNotFoundItem(true)
    setItem(item)


  }, [products,location.search])

  useEffect(()=> {
    if(!products || !item) return 
    const relatedProducts = products.filter(product=> product.id !== item.id && product.category === item.category)
    setRelatedProduct(relatedProducts)
  }, [products, item])

  return (
    <>
      <section className="  rounded-lg p-1 ">
        {item &&

          <ProductDetails
            title={item.title} description={item.description} price={item.price} image={item.image}
            onAddProduct={() => addProductCart(item)}
            onDeleteProduct={() => deleteProductCart(item.id)}
            isIncart={isProductsInCart(item.id)}
            cant={getCantItemProduct(item.id)}
            onAddCantProduct={()=> addCantItemProduct(item.id)}
            onDeleteCantProduct={()=> deleteCantItemProduct(item.id)}
          />}

        {loading && <ProductDetailsSkeleton />}
        <h2 className=" mt-10 text-xl font-semibold">Productos relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 xl:grid-cols-4 ">
          {relatedProducts && <ProductCardList productList={relatedProducts} />}

        </div>
      </section>


    </>
  )
}

export default ProductDetailLayout