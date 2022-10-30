import React, { useState, useEffect } from 'react';
import DetalleProducto from './DetalleProducto';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {

    const [producto, setproducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        // consultarStock('../json/stock.json').then(productos => {
        //     const producto1 = productos.find(productoArray => productoArray.id == id)
        //     setproducto(producto1)
        // })

        }, []);

        return (
            <>
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <DetalleProducto producto={producto} />
                </div>
            </>
        );
    }

export default ItemDetailContainer;
