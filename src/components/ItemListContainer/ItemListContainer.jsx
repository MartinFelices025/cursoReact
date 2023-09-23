import React from 'react'
import useServiciosApi from '../../hooks/useServiciosApi'
import ItemsListado from './ItemsListado'

const ItemListContainer = ({estado}) => {
  
  let url = estado == undefined ? "https://rickandmortyapi.com/api/character/?page=1" : (`https://rickandmortyapi.com/api/character/?page=2&name=rick&status=${estado}`)  
  const { data, isLoading } = useServiciosApi(url);
  
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const elementos = Array.isArray(data.results) ? data.results : [];

  return (
    <div className='card-container'>
      { elementos !=null && <ItemsListado elementos={elementos}/>}
    </div>
  )
}

export default ItemListContainer