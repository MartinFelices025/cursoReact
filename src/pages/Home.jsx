import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'
import { addDoc, collection, getFirestore } from "firebase/firestore"

const Home = () => {

  const { categoria } = useParams()
  return (
    <div>
    <ItemListContainer categoria={categoria} />
    </div>
  )
}

export default Home