import React, { useEffect, useState } from 'react'

const filterNameProduct = (nameProduct,nameToFilter)=>{
    
    if(nameProduct.toLocaleLowerCase().includes(nameToFilter.toLocaleLowerCase())) return true
    return false 
    
}

const filterProductPrice = (priceProduct,priceToFilter)=> {
    if(priceProduct >= priceToFilter) return true
    return false
}

const filterProductCategory = (categoryProduct,categoryToFilter)=>{
    if(categoryProduct.toLocaleLowerCase() === categoryToFilter.toLocaleLowerCase()) return true
    return false
}

function useFiltersProducts(products) {
    const [filterName,setFilterName] = useState(null)
    const [price,setPrice] = useState(null)
    const [category,setCategory] = useState(null)
    const [productsFilters,setProductsFilter] = useState(null)

    const onChangeName = (name) => setFilterName(name)
    
    const onChangePrice = (price)=>  setPrice(price)
    
    const onChangeCategory = (category)=> setCategory(category)
    

    // const 

    useEffect(()=> {

        if(products && products.length > 0  ){
            setProductsFilter(prevProFilters=>{
                return  products.filter(product=>{
                    
                    if(filterName) {
                        if(filterNameProduct(product.title,filterName) === false) return  false 
                    }
                    // if(filterProductPrice(product.price,filterPrice) && filterPrice !== null) cumpleFiltros = false
                    if(price){
                        if(filterProductPrice(product.price,price) === false) return false
                    }
                    if(category){
                        if(filterProductCategory(product.category,category) === false) return false
                    }

                    
                    return true
                    

                })
            })
        }


    }, [filterName,price,category,products])
    useEffect(()=>{
        console.log("PRODUCT FILTERS",productsFilters)
    } , [productsFilters])

  return {onChangeName, onChangePrice, price, onChangeCategory,category,productsFilters}
}

export default useFiltersProducts