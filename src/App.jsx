import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting="Productos"/>
            <Products/>
        </> 
    );
}

export default App;