import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
const CartWidget = ({cantidad}) => {
  return (
    <>
      <FaCartPlus className="cart" />
      <span className="badge bg-dark">{cantidad}</span>
    </>
  )
}

export default CartWidget