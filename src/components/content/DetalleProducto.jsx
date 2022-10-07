import React from 'react';

const DetalleProducto = ({producto}) => {
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
                                    <button className='btn btn-dark'>Comprar</button>
                                </div>
                            </div>
                        </div>
        </>
    );
}

export default DetalleProducto;


