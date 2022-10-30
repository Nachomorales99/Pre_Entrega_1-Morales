import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Carrito = () => {
    const { cart, addProduct, removeProd } = useContext(CartContext)
    const [localCart, setlocalCart] = useState([]);

    useEffect(() => {

        const mostrarProd = cart.map(producto =>

            <div className="col-lg-4 mb-3">
                <div className="card" key={producto.id}>
                    <div className="img-container">
                        <img src={producto.img}
                            alt={producto.nombre} className="image card-img-top" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-tittle">{producto.nombre}</h5>
                        <h6 className="card-subtitle mb-2">Precio: ${producto.precio}</h6>

                        <p className="card-text">Cantidad: {producto.cant}</p>

                        <p className="card-text">Precio Total: {producto.precio * producto.cant}</p>

                        <button className='btn btn-dark' onClick={() => removeProd(producto)}>Eliminar</button>
                    </div>
                </div>
            </div>)
        setlocalCart(mostrarProd)
    }, [cart]);

    const app = (cart.length != 0) ? <div className='row'> {localCart} </div> : <h1>No se han agregado productos <button className='btn btn-dark'>Volver</button></h1> 

    return app

}

export default Carrito;