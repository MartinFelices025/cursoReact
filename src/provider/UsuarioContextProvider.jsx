import React, { useState, useEffect } from 'react';
import UsuarioContext from './usuarioContext';
import { obtenerElemento} from '../conexion/conexionDB'; 
import {getDoc} from "firebase/firestore";

const UsuarioContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({})


    useEffect(() => {
        const data = obtenerElemento("usuarios", "lNaNpcROkEWPgIgqzFRi")
  
        getDoc(data)
            .then( (snapshot) =>{
                console.log(snapshot.exists())
                if(snapshot.exists()) {
                    
                    setUsuario({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                }
            })
            .catch((err) => console.log(err))
  
    }, [])



    const value = {
        usuario,
        setUsuario
    };
    return (
        <UsuarioContext.Provider value={value}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContextProvider