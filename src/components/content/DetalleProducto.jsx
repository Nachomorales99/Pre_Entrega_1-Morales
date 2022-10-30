import React, {useState, useContext} from 'react';
import {CartContext} from '../../context/CartContext';

const DetalleProducto = ({producto}) => {
    const [cant, setCant] = useState(1);
    const{cart, addProduct, removeProd} = useContext(CartContext) 

    const cantProd = (oper) => {
        if(oper == '+'){
            if(cant < producto.stock){
                setCant(cant + 1)
            }
        }else{
            if(cant > 1){
                setCant(cant - 1)
            }
        }
    }

    return (
        <>
            <div className="col-lg-4 mb-3">
                <div className="card" key={producto.id}>
                    <div className="img-container">
                        <img src={producto.img}
                                        alt={producto.nombre} className="image card-img-top"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-tittle">{producto.nombre}</h5>
                        <h6 className="card-subtitle mb-2">${producto.precio}</h6>
                        <p className="card-text">{producto.desc}</p>

                        <p className="card-text">{cant}</p>

                        <button className='btn btn-light' onClick={() => cantProd("-")}>-</button>

                        <button className='btn btn-light' onClick={() => cantProd("+")}>+</button>

                        <button className='btn btn-dark' onClick={() => addProduct(producto, cant)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleProducto;


