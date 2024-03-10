import { createContext, useContext, useEffect, useMemo, useState } from "react";

const cartContext = createContext()

export const useContextCart = () => {
    return useContext(cartContext)
}

const estructureProduct = {
    id: "Number",
    title: "String",
    description: "String",
    price: "Number",
    image: "String"

}

const validityEstructureProduct = (objectProduct) => {

    for (const key in estructureProduct) {
        if (!(key in objectProduct)) {
            throw new Error("El objeto producto no cumple con la estructura correcta");
        }


    }
}



export const ContextCartProvider = ({ children }) => {
    const [productsInCart, setProductsInCart] = useState([])
    const [detailsPayout, setDetailsPayout] = useState({
        subtotal: 0,
        shipping: 5000,
        iva: 3000,
        totalAmount: 0

    })


    const addProductCart = (objectProduct) => {

        const newProduct = objectProduct
        validityEstructureProduct(newProduct)
        const { id } = objectProduct
        const isInCart = productsInCart.filter((product => product.id === id))
        if (isInCart.length > 0) return
        newProduct['cant'] = 1
        setProductsInCart(prev => [...prev, newProduct])
        saveCartItems(objectProduct) //save product in localstorage
    }
    const deleteProductCart = (idProdut) => {
        setProductsInCart(prev => {
            return prev.filter((product) => product.id !== idProdut)
        })
        deleteProductSave(idProdut)
    }

    const addCantItemProduct = (idProdut) => {
        return setProductsInCart(prev => {
            return prev.map(product => {
                if (product.id === idProdut) {
                    product['cant'] = product['cant'] ? product['cant'] + 1 : 1
                    return product
                }
                return product
            })
        })
    }

    const getCantItemProduct = (idProduct)=>{
        const item = productsInCart.find(product=> product.id === idProduct)
        if(!item) return 0
        return item.cant
    }

    const deleteCantItemProduct = (idProdut) => {
        return setProductsInCart(prev => {
            return prev.map(product => {
                if (product.id === idProdut) {
                    if(product['cant'] > 1 === false) return product
                    product['cant'] =  product['cant'] - 1 
                    return product
                }
                return product
            })
        })
    }

    const isProductsInCart = (idProdut) => {
        const isProduct = productsInCart.filter(product => product.id === idProdut)
        return isProduct.length > 0 ? true : false
    }

    const getItemsSaved = () => {
        try {
            const items = JSON.parse(window.localStorage.getItem("products_cart"))
            return items
        } catch (error) {
            return []
        }
    }


    const saveCartItems = (product) => {
        const items = getItemsSaved()
        let itemsToSave = items ? [...items, product] : [product]
        window.localStorage.setItem("products_cart", JSON.stringify(itemsToSave))
    }

    const deleteProductSave = (idProdut) => {
        const items = getItemsSaved()
        if (items) {
            let newItemsToSave = items.filter(product => product.id !== idProdut)
            window.localStorage.setItem("products_cart", JSON.stringify(newItemsToSave))
        }
    }



    useEffect(() => {
        const itemsSaved = JSON.parse(window.localStorage.getItem("products_cart"))
        if (itemsSaved) {
            setProductsInCart(itemsSaved)
        }
    }, [])



    const updateDetailsPayout = useMemo(() => {
        if (productsInCart.length === 0) return
        const subtotal = productsInCart.reduce((acomulador, product) => acomulador + (product.cant * product.price), 0)
        const totalAmount = subtotal + detailsPayout.shipping + detailsPayout.iva;
        setDetailsPayout(prev=>{
            
            return {...prev, subtotal:subtotal,totalAmount:totalAmount}
})
    }, [productsInCart])



    return (
        <cartContext.Provider value={{
            productsInCart, detailsPayout, addProductCart, deleteProductCart, getCantItemProduct,  addCantItemProduct
            , deleteCantItemProduct, isProductsInCart
        }}>
            {children}
        </cartContext.Provider>
    )

}
