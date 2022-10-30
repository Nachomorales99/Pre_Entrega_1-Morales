import React, {useState, useEffect} from 'react';
import { getProductos } from '../../utils/firebase';
import { Link } from 'react-router-dom';
const ItemListContainer = () => {
    const [productos, setproductos] = useState([]);
    useEffect(() => {
        getProductos().then(productos => {
            const cardProducto = productos.map(producto =>
                <div className="col-lg-4 mb-3">
                    <div className="card" key={producto[0]}>
        <div className="img-container">
            <img src={producto[1].img} alt={producto[1].nombre} className="image card-img-top"/>
            <div className="overlay">
            <button className="btn btn-outline-secondary btn-sm"><i className="fas fa-shopping-cart mr-2">Agregar al carrito</i>
            </button>
            </div>
            </div>
            <div className="card-body">
            <h5 className="card-tittle">{producto[1].nombre}</h5>
            <h6 className="card-subtitle mb-2">${producto[1].precio}</h6>
            <p className="card-text">{producto[1].desc}</p>
            <button className='btn btn-black'><Link className='nav-link' to={`/item/${producto[0]}`}>Ver Producto</Link></button>
                </div>
            </div>
            </div>)
            
            setproductos(cardProducto)
    });
    }, []);

    return (
        <section className="gallery">
            <div className="container">
                <div className="row">
                    {productos}
                </div>
            </div>
        </section>
    );
}

export default ItemListContainer;