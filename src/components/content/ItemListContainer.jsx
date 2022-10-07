import React, { useState, useEffect } from 'react';
import { consultarStock } from '../../utils/generadorProductos'
import { Link } from 'react-router-dom';
const ItemListContainer = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        consultarStock('./json/stock.json').then(products => {
            
            const cardProduct = products.map(product =>
                <div className="col-lg-4 mb-3">
                            <div className="card" key={product.id}>
                                <div className="img-container">
                                    <img src={product.img}
                                        alt={product.nombre} className="image card-img-top"/>
                                    <div className="overlay">
                                        <button className="btn btn-outline-secondary btn-sm"><i
                                                className="fas fa-shopping-cart mr-2">Agregar al carrito</i></button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-tittle">{product.nombre}</h5>
                                    <h6 className="card-subtitle mb-2">${product.precio}</h6>
                                    <p className="card-text">{product.desc}</p>
                                    <button className='btn btn-black'><Link className='nav-link' to={`/item/${product.id}`}>Ver Producto</Link></button>
                                </div>
                            </div>
                        </div>)
            
            
            
            setproducts(cardProduct)
    });
    }, []);

    return (
        <section className="gallery">
            <div className="container">
                <div className="row">
                    {products}
                </div>
            </div>
        </section>
    );
}

export default ItemListContainer;
