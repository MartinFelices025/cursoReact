import React, { useState, useEffect } from 'react';
import ItemsListado from './ItemsListado';
import { getDocs } from 'firebase/firestore';
import { retornaElementos, filtrarCategoria } from '../../conexion/conexionDB';

const ItemListContainer = ({ categoria }) => {
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let query;
      if (categoria) {
        query = filtrarCategoria("productos", categoria);
      } else {
        query = retornaElementos("productos");
      }

      try {
        const snapshot = await getDocs(query);
        const datos = snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
        setElementos(datos);
      } catch (error) {
        console.error("No se pudieron obtner los datos:", error);
      }
    };

    fetchData();
  }, [categoria]);

  return (
    <div className='card-container'>
      {elementos != null && <ItemsListado elementos={elementos} />}
    </div>
  );
}

export default ItemListContainer;
