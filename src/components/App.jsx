import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css'
import Navbar from './content/Navbar';
import Footer from './content/Footer'
import About from './content/About'
import Contacto from './content/Contacto'
import Carrito from './content/Carrito'
import Home from './content/Home' 
import Producto from './content/Producto'
import Mayorista from './content/Mayorista'
import ItemListContainer from './content/ItemListContainer';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <ItemListContainer greeting="Productos" />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/producto" element={<Producto/>} />
                    <Route path="/mayorista" element={<Mayorista/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contacto" element={<Contacto/>} /> 
                    <Route path="/carrito" element={<Carrito/>} />

                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;