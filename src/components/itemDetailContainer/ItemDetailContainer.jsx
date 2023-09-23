import React from 'react'
import useServiciosApi from '../../hooks/useServiciosApi';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({id}) => {  
    const { data, isLoading } = useServiciosApi((`https://rickandmortyapi.com/api/character/${id}`));

    if (isLoading) {
        return <div>Cargando...</div>;
      }

  return (
   <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer