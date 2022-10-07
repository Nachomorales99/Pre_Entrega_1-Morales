import {Link} from "react-router-dom";

const Dropdown = ({lista}) => {

    return (
        <>
            <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Productos</button>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to={"/categoria/remera"}>{lista[0]}</Link>
                    <Link className="dropdown-item" to={"/categoria/buzo"}>{lista[1]}</Link>
                    <Link className="dropdown-item" to={"/categoria/jogger"}>{lista[2]}</Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to={"/"}>{lista[3]}</Link>
                </div>
            </li>
        </>
    );
}

export default Dropdown;