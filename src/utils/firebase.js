import {initializeApp} from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD_KgVXV269qqSefJqrb_EFNiIvSG7NgdI",
    authDomain: "blackowl-mdz.firebaseapp.com",
    projectId: "blackowl-mdz",
    storageBucket: "blackowl-mdz.appspot.com",
    messagingSenderId: "476410509514",
    appId: "1:476410509514:web:d7ae96040a21b52090dc33"
};

const app = initializeApp(firebaseConfig);
const stock = getFirestore();

//Crear stock en el servidor

const cargarBaseDeDatos = async () => {
    const promise = await fetch('./json/stock.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(stock, "productos"), {
            nombre: producto.nombre, tipo: producto.tipo, desc: producto.desc, precio: producto.precio, img: producto.img, stock: producto.stock, talle: producto.talle
        })
    })
} 

//Traer un producto del servidor

const getProducto = async (id) => {
    const producto = await getDoc(doc(stock, "productos", id))
    return producto
} 

//Traer todos los productos del servidor
const getProductos = async () => {
    const productos = await getDocs(collection(stock, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()] )
    return items
} 

//Modificar productos

const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(stock,"productos", id), info)
    return estado
}

//Eliminar productos

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(stock, "productos", id))
    return estado
} 

//Crear productos

const createProducto = async (objProd) => {
    const estado = await addDoc(doc(stock, "productos"),{
        nombre: objProd.nombre, tipo: objProd.tipo, desc: objProd.desc, precio: objProd.precio, img: objProd.img, stock: objProd.stock, talle: objProd.talle
    })
    return estado
}

//Crear orden de compra 

const createOrdendeCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
    const oredendeCompra = await addDoc(collection(stock, "ordendeCompra"),{
        nombre: nombre,
        apellido: apellido,
        email: email,
        dni: dni,
        direccion: direccion,
        precioTotal: preTotal
    })
    return oredendeCompra
} 

//Obtener orden de compra

const getOrdendeCompra = async (id) => {
    const ordendeCompra = await getDoc(doc(stock, "ordedeCompra", id))
    return ordendeCompra
}

export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, createOrdendeCompra, getOrdendeCompra}