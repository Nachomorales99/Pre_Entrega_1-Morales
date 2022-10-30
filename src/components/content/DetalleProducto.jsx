import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const DetalleProducto = ({ producto }) => {
    const [cantidad, setCantidad] = useState(1);

    const { addProduct } = useContext(CartContext)

    const cantProd = (oper) => {
        if (oper === '+') {
            if (cantidad < producto[1].stock) {
                setCantidad(cantidad + 1)
            }
        } else {
            if (cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        }
    }

    return (
        <>
            <div className="col-lg-4 mb-3">
                <div className="card">
                    <div className="img-container">
                        <img src={producto[1].img} alt="" className="image card-img-top"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-tittle">{producto[1].nombre}</h5>
                        <h6 className="card-subtitle mb-2">${producto[1].precio}</h6>
                        <p className="card-text">{producto[1].desc}</p>

                        <p className="card-text">{cantidad}</p>

                        <button className='btn btn-light' onClick={() => cantProd("-")}>-</button>

                        <button className='btn btn-light' onClick={() => cantProd("+")}>+</button>

                        <button className='btn btn-dark' onClick={() => addProduct(producto, cantidad)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleProducto;