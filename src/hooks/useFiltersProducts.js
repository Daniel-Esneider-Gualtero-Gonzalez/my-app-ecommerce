import React, { useEffect, useState } from 'react'

const filterNameProduct = (nameProduct, nameToFilter) => {

    if (nameProduct.toLocaleLowerCase().includes(nameToFilter.toLocaleLowerCase())) return true
    return false

}

const filterProductPrice = (priceProduct, priceToFilter) => {
    if (priceProduct >= priceToFilter) return true
    return false
}

const filterProductCategory = (categoryProduct, allCategories) => {
    if (allCategories.includes(categoryProduct)) return true
    return false

    return true
}

function useFiltersProducts(products) {

    const [name, setFilterName] = useState(null)
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState([])
    const [productsFilters, setProductsFilter] = useState({
        isFilter: false,
        listProducts: []
    })

    const onChangeName = (name) => setFilterName(name)

    const onChangePrice = (price) => setPrice(price)

    const onChangeCategory = (newcategory) => {
        if (newcategory === null) return

        if (!category.includes(newcategory)) return setCategory(prevCate => [...prevCate, newcategory])

        return setCategory(prevCate => prevCate.filter(cate => cate !== newcategory))

    }


    useEffect(() => {
        if (!(name || price || category.length > 0)) {
            setProductsFilter({isFilter:false, listProducts: []})
            return
        }
        if(!products || products.length === 0 ) return

        const productsFilters = products.filter(product => {

            if (name) {
                if (filterNameProduct(product.title, name) === false) return false
            }

            if (price) {
                if (filterProductPrice(product.price, price) === false) return false
            }
            if (category.length > 0) {
                if (filterProductCategory(product.category, category) === false) return false
            }

            return true

        })

        setProductsFilter({isFilter:true, listProducts:productsFilters})

    }, [name, price, category, products])


    return { name, onChangeName, onChangePrice, price, onChangeCategory, category, productsFilters }
}

export default useFiltersProducts