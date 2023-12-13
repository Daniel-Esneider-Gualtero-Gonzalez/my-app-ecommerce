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
    const [filterPrice,setFilterPrice] = useState(null)
    const [filterCategoy,setFilterCategory] = useState(null)
    const [productsFilters,setProductsFilter] = useState(null)

    const onChangeName = (name) => setFilterName(name)
    
    const onChangePrice = (price)=>  setFilterPrice(price)
    
    const onChangeCategory = (category)=> setFilterCategory(category)
    

    // const 

    useEffect(()=> {

        if(products && products.length > 0){
            setProductsFilter(
                products.filter(product=>{
                    
                    if(filterName) {
                        if(filterNameProduct(product.title,filterName) === false) return  false 
                    }
                    // if(filterProductPrice(product.price,filterPrice) && filterPrice !== null) cumpleFiltros = false
                    if(filterPrice){
                        if(filterProductPrice(product.price,filterPrice) === false) return false
                    }
                    if(filterCategoy){
                        if(filterProductCategory(product.category,filterCategoy) === false) return false
                    }

                    return true

                })
            )
        }


    }, [filterName,filterPrice,filterCategoy])

  return {onChangeName, onChangePrice, onChangeCategory,productsFilters}
}

export default useFiltersProducts