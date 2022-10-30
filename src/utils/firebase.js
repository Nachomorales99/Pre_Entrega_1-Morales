import {initializeApp} from "firebase/app";
import {collection, addDoc, getFirestore, getDoc, getDocs} from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "blackowl-mdz.firebaseapp.com",
    projectId: "blackowl-mdz",
    storageBucket: "blackowl-mdz.appspot.com",
    messagingSenderId: "476410509514",
    appId: "1:476410509514:web:d7ae96040a21b52090dc33"
};

const app = initializeApp(firebaseConfig);
const stock = getFirestore();

const cargarBaseDeDatos = async () => {
    const promise = await fetch('./json/stock.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(stock, "productos"), {
            nombre: producto.nombre, tipo: producto.tipo, desc: producto.desc, precio: producto.precio, img: producto.img, stock: producto.stock, talle: producto.talle
        })
    })
} 

const getProductos = async () => {
    const productos = await getDocs(collection(stock, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()] )
    return items
}
export {cargarBaseDeDatos, getProductos}