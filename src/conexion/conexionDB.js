import {doc, collection, where, getFirestore, query} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCNmGGUBWoPLaLkUYp2_DfxVUqKnCzdwzU",
    authDomain: "trabajofinalmf.firebaseapp.com",
    projectId: "trabajofinalmf",
    storageBucket: "trabajofinalmf.appspot.com",
    messagingSenderId: "693372834765",
    appId: "1:693372834765:web:cc07963c2d6df2d4ff6a84"
  };

  const app = initializeApp(firebaseConfig); 

const conectarDB = () => {
    const db = getFirestore();
    return db;
}

const obtenerElementos = (tabla) =>{
    return collection(conectarDB(), tabla);
}

const retornaElementos = (coleccion)=>{
    return query(obtenerElementos(coleccion));
}

const filtrarCategoria = (coleccion, categoria) => {
    const q = query(obtenerElementos(coleccion), where("categoria", "==", categoria));
    return q;
  };

  const obtenerElemento = (coleccion, id) => {
    return doc(conectarDB(), coleccion, id);
  };


export {obtenerElementos, obtenerElemento, retornaElementos, filtrarCategoria};