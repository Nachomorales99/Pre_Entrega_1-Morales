import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarStock } from '../../utils/generadorProductos';
const Category = () => {

    const [productos, setproductos] = useState([]);
    const {tipo} = useParams()
useEffect(() => {
    consultarStock('../json/stock.json').then(productos => {
        const productosCategory = productos.filter(producto => producto.tipo === tipo)
        console.log(productosCategory)
        const cardProducto = productosCategory.map(producto =>
            <div className="col-lg-4 mb-3">
                        <div className="card" key={producto.id}>
                            <div className="img-container">
                                <img src={producto.img}
                                    alt={producto.nombre} className="image card-img-top"/>
                                <div className="overlay">
                                    <button className="btn btn-outline-secondary btn-sm"><i
                                            className="fas fa-shopping-cart mr-2">Agregar al carrito</i></button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-tittle">{producto.nombre}</h5>
                                <h6 className="card-subtitle mb-2">${producto.precio}</h6>
                                <p className="card-text">{producto.desc}</p>
                                <button className='btn btn-black'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                            </div>
                        </div>
                    </div>)

                    setproductos(cardProducto)
    })
    
}, [tipo]);
    return (
        <div className="row">
            {productos}
        </div>
    );
}

export default Category;
