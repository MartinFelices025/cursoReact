import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'

const Home = () => {
  const { estado } = useParams()
  return (

    <ItemListContainer estado={estado} />
  )
}

export default Home