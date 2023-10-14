import React from 'react'
import ItemDetail from './ItemDetail';
import { useState, useEffect, useContext} from 'react'
import { obtenerElemento } from '../../conexion/conexionDB';
import {getDoc} from "firebase/firestore";
import CartContext from '../../provider/cartContext';

const ItemDetailContainer = ({id}) => {  
    
    const [data, setdata] = useState([]);

    const agegarProducto = (cant) => {agregarelemento(data, cant)
  }
  const { agregarelemento } = useContext(CartContext);
  
    useEffect(() => {
      const data = obtenerElemento("productos", id)

      getDoc(data)
          .then( (snapshot) =>{
              console.log(snapshot.exists())
              if(snapshot.exists()) {
                  
                setdata({
                      id: snapshot.id,
                      ...snapshot.data()
                  })
              }
          })
          .catch((err) => console.log(err))

  }, [id, agregarelemento])
  return (
   <ItemDetail data={data} agegarProducto={agegarProducto}/>
  )
}

export default ItemDetailContainer