import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setcart] = useState([]);

    //Agregar producto

    const addProduct = (producto, cantidad) => {
        const aux = cart;
        let index = aux.findIndex(producto => producto.id === producto[0]);

        if (index !== -1) {
            aux[index].cantidad = cantidad
        } else {
            const id = producto[0]
            const x = producto[1]
            const prodCart = {id, ...x, cantidad: cantidad}
            aux.push(prodCart)
        }

        toast.success('Agregado al carrito', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "black",
            });

        setcart(structuredClone(aux))
    }

    //Quitar producto

    const removeProd = (prod) => {
        const aux = cart
        let index = aux.findIndex(producto => producto.id === prod.id)

        aux.splice(index, 1) 

        toast.error('Elminado del carrito', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "black",
            });

        setcart(structuredClone(aux))
    }

    return (
        <>
            <CartContext.Provider value={{cart, addProduct, removeProd}}>
                {props.children}
                <ToastContainer />
            </CartContext.Provider>
        </>
    );
}

export {CartContext, CartProvider};