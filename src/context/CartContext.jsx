import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setcart] = useState([]);

    //Agregar producto

    const addProduct = (prod, cant) => {
        const aux = cart;
        let index = aux.findIndex(producto => producto.id == prod.id);

        if (index != -1) {
            aux[index].cantidad = cant
        } else {
            const prodCart = { ...prod, cantidad: cant }
            aux.push(prodCart)
        }
        setcart(structuredClone(aux))
        console.log(cart)
    }

    //Quitar producto

    const removeProd = (prod) => {
        const aux = cart
        let index = aux.findIndex(producto => producto.id == prod.id)

        aux.splice(index, 1)
        setcart(structuredClone(aux))
        console.log(cart)
    }

    return (
        <>
            <CartContext.Provider value={{ cart, addProduct, removeProd }}>
                {props.children}
            </CartContext.Provider>
        </>
    );
}

export {CartContext, CartProvider};