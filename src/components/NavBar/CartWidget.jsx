import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
const CartWidget = () => {
  return (
    <div>
      <span className="badge bg-dark">0</span>
      <FaCartPlus className="cart" />
    </div>
  )
}

export default CartWidget