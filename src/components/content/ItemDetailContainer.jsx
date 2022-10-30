import React, {useState, useEffect} from 'react';
import DetalleProducto from './DetalleProducto';
import {useParams} from 'react-router-dom';
import {getProducto} from '../../utils/firebase';
const ItemDetailContainer = () => {

    const [producto, setproducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProducto(id).then(prod => setproducto([prod.id, prod.data()]))

    }, []);

    if (producto.length !== 0) {
        return (
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <DetalleProducto producto={producto}/>
            </div>
        );
    }
}

export default ItemDetailContainer;