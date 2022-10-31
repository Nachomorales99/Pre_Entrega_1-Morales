import React, {useState, useEffect, useContext} from 'react';
import {CartContext} from '../../context/CartContext'; 
import { Link } from 'react-router-dom';

const Carrito = () => {
    const {cart, addProduct, removeProd} = useContext(CartContext)
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

                        <p className="card-text">Cantidad: {producto.cantidad}</p>

                        <p className="card-text">Precio Total: ${producto.precio * producto.cantidad}</p>

                        <button className='btn btn-dark' onClick={() => removeProd(producto)}>Eliminar</button>
                    </div>
                </div>
            </div>)
        setlocalCart(mostrarProd)
    }, [cart]);

    const app = (cart.length != 0) ? <div className='row'> {localCart} <Link to={"/compra"}><button className='compra-final'>Finalizar compra</button></Link></div> : <h1 className='no-product'>No se han agregado productos <Link to={"/"}><button className='ir-home btn btn-dark'>Ir a Home</button></Link></h1> 

    return app

}

export default Carrito;