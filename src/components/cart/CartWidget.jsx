import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
const CartWidget = () => {
  return (
    <>
      <span className="badge bg-dark">0</span>
      <FaCartPlus className="cart" />
    </>
  )
}

export default CartWidget