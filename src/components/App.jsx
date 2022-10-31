import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css'
import Navbar from './content/Navbar';
import Footer from './content/Footer'
import About from './content/About'
import Equipo from './content/Equipo'
import Carrito from './content/Carrito'
import ItemListContainer from './content/ItemListContainer' 
import ItemDetailContainer from './content/ItemDetailContainer'
import Category from './content/Category';
import Compra from './content/Compra';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />
                    <Route path="/category/:tipo" element={<Category/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/equipo" element={<Equipo/>} /> 
                    <Route path="/carrito" element={<Carrito/>} />
                    <Route path="/compra" element={<Compra/>}/>
                    <Route path="*" element={<h1 className='error-404'>Error 404</h1>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;