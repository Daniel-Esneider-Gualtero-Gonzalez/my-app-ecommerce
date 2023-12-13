import  { useState } from 'react'

function useGetProducts() {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [products,setProducts]  = useState(null)

    const getProducts = async ()=>{
        setLoading(true)
        try {
            const getProducts =  await fetch("https://fakestoreapi.com/products/")
            if (!getProducts.ok) return setError("Error al obtener los productos")
            const products = await getProducts.json()
            return setProducts(products)
                
            
            
        } catch (error) {

            return setError("Error al obtener los productos")
            
        }finally{
            setLoading(false)
        }
    }

    const prefetching = async ()=>{
        setLoading(true)
        try {
            const newProducts = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
            if(!newProducts.ok){
                return setError("Error al hacer el prefetching")
            }
            const data = await newProducts.json()

            console.log("data  al hacer el prefetching",data)
        } catch (error) {
            return setError("Error al hacer el prefetching")
        }finally{
            setLoading(false)
        }

    }

  return{
    loading, error, products,getProducts
  }
}

export default useGetProducts