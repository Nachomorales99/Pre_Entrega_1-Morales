import {memo} from 'react'
import {Link} from 'react-router-dom';

const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/mayorista">Mayorista</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/about">¿Que es Black Owl?</Link>
            </li>
        </>
    );
}

export default memo(Secciones);