import React from 'react'
import { useParams } from 'react-router'
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer'

const Detalle = () => {
  const { id } = useParams()
  return (
    <ItemDetailContainer id={id}/>
  )
}

export default Detalle