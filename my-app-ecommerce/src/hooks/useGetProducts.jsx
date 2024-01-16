import  { useEffect, useState } from 'react'

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
            const newProducts = await fetch("https://fakestoreapi.com/products/")
            if(!newProducts.ok){
                console.log("error en el preteching la respuesta es diferente de 200")
                return setError("Error al hacer el prefetching")
            }
            const data = await newProducts.json()

           return setProducts(prevProduct=>{
            return [...prevProduct,...data]
           })
            // console.log("product mas los nuevos del prefetching",produtcMasNuevos)
        } catch (error) {
            console.log("error en el cath al hacer el prefetching",error)
            return setError("Error al hacer el prefetching")
        }finally{
            setLoading(false)
        }

    }

    useEffect(()=>{
        console.log("variable de productos",products)
    },[products])

  return{
    loading, error, products,getProducts,prefetching
  }
}

export default useGetProducts