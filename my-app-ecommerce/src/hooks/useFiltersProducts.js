import React, { useEffect, useState } from 'react'

const filterNameProduct = (nameProduct)=>{

    if(nameProduct.toLocaleLowerCase().includes(nameProduct.toLocaleLowerCase())) return true
    return false 
    
}

function useFiltersProducts({listProducts}) {
    const [filterName,setFilterName] = useState(null)
    const [productsFilters,setProductsFilter] = useState(null)
    const onChangeName = (name) =>{
        setFilterName(name)
    }

    

    // const 

    useEffect(()=> {

        if(listProducts){
            setProductsFilter(
                listProducts.filter(product=>{
    
                    if(filterNameProduct(product.name) === false) return false
    
                })
            )
        }


    }, [filterName])
  return {onChangeName,productsFilters}
}

export default useFiltersProducts