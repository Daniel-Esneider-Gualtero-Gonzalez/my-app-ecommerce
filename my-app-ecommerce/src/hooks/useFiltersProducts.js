import React, { useEffect, useState } from 'react'

const filterNameProduct = (nameProduct,nameToFilter)=>{
    
    if(nameProduct.toLocaleLowerCase().includes(nameToFilter.toLocaleLowerCase())) return true
    return false 
    
}

const filterProductPrice = (priceProduct,priceToFilter)=> {
    if(priceProduct >= priceToFilter) return true
    return false
}

const filterProductCategory = (categoryProduct,allCategories)=>{
    if(allCategories.includes(categoryProduct)) return true
    return false

    return true
}

function useFiltersProducts(products) {
    const [isFilter,setIsFilter] = useState(false)
    const [filterName,setFilterName] = useState(null)
    const [price,setPrice] = useState(0)
    const [category,setCategory] = useState([])
    const [productsFilters,setProductsFilter] = useState([])

    const onChangeName = (name) => setFilterName(name)
    
    const onChangePrice = (price)=>  setPrice(price)
    
    const onChangeCategory = (newcategory)=> {
        if(newcategory === null ) return 

        if(!category.includes(newcategory)) return setCategory(prevCate=> [...prevCate,newcategory])

        return setCategory(prevCate=> prevCate.filter(cate => cate !== newcategory))
        
    }
    

    // const 

    useEffect(()=> {

        if( isFilter === true && products && products.length > 0  ){
            // console.log("realizando el filtro de productos")
            setProductsFilter(prevProFilters=>{
                return  products.filter(product=>{
                    
                    if(filterName) {
                        if(filterNameProduct(product.title,filterName) === false) return  false 
                    }
                    
                    if(price){
                        if(filterProductPrice(product.price,price) === false) return false
                    }
                    if(category.length > 0){
                        if(filterProductCategory(product.category,category) === false) return false
                    }

                    return true
                    

                })
            })
        }


    }, [isFilter,filterName,price,category,products])


    useEffect(()=>{
        console.log("PRODUCT FILTERS",productsFilters)
    } , [productsFilters])


    // validar si estan filtrando
    useEffect(()=> {
        if(filterName || price !== 0 || category.length > 0) return setIsFilter(true)

        return setIsFilter(false) , setProductsFilter([])
    }, [filterName,price,category])

    useEffect(()=>{
        console.log("categories", category)
    }, [category])
    
    
    
  return {isFilter,onChangeName, onChangePrice, price, onChangeCategory,category,productsFilters}
}

export default useFiltersProducts