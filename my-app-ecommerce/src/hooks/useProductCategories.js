import React, { useState } from 'react'

function useProductCategories() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [categories, setCategories] = useState(null)


    const getCategories = async () => {
        setLoading(true)
        try {
            const fetchCategories = await fetch("https://fakestoreapi.com/products/categories/")
            if (!fetchCategories.ok) {
                return setError("Error al onbtener las categorias")
            }
            const categories = await fetchCategories.json()
            return setCategories(categories)

        } catch (error) {

            return setError("Error al onbtener las categorias")

        } finally {
            setLoading(false)
        }

    }
    return {loading,error,categories,getCategories}
}

export default useProductCategories