import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setcart] = useState([]);

    //Agregar producto

    const addProduct = (producto, cantidad) => {
        const aux = cart;
        let index = aux.findIndex(producto => producto.id == producto[0]);

        if (index != -1) {
            aux[index].cantidad = cantidad
        } else {
            const id = producto[0]
            const x = producto[1]
            const prodCart = {id, ...x, cantidad: cantidad}
            aux.push(prodCart)
        }
        setcart(structuredClone(aux))
    }

    //Quitar producto

    const removeProd = (prod) => {
        const aux = cart
        let index = aux.findIndex(producto => producto.id == prod.id)

        aux.splice(index, 1)
        setcart(structuredClone(aux))
    }

    return (
        <>
            <CartContext.Provider value={{cart, addProduct, removeProd}}>
                {props.children}
            </CartContext.Provider>
        </>
    );
}

export {CartContext, CartProvider};