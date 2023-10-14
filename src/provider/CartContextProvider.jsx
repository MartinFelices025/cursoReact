import React, { useState } from 'react'
import CartContext from './cartContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const CartContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [carrito, setCarrito] = useState([]);

    const agregarelemento = (elementos, cant) => {
        const itemExistenteI = carrito.findIndex(el => el.titulo === elementos.titulo);
        //Valido si el elemento ya existe, en tal caso sumo cantidad
        if (itemExistenteI !== -1) {

            const carritoActualizado = [...carrito];
            carritoActualizado[itemExistenteI].cantidad += cant;
            setCarrito(carritoActualizado);
          } else {
            setCarrito([
              ...carrito,
              {
                ...elementos,
                cantidad: cant
              }
            ]);
          }
          Swal.fire({
            title: '¡Agregado!',
            text: 'Los productos se agregaron a su carrito de compra',
            icon: 'success',
            timer: 2000, 
            timerProgressBar: true, 
            showConfirmButton: false, 
          });
        };

    const eliminarElemento = (id) => {
        const nuevoCarrtio = carrito.filter((ele) => ele.id !== id);
        if(("cantidad", nuevoCarrtio.reduce((total, elemento) => total + elemento.cantidad, 0))===0){
            navigate("/");
        }
        setCarrito(nuevoCarrtio)
    };

    const vaciar = () => {
        setCarrito([])
    }

    const sumarTotalPedido = () => {
        let total = 0;
        carrito.forEach((elemento) => {
          total += elemento.precio * elemento.cantidad;
        });
        return total;
      };

    const values = {
        carrito,
        agregarelemento,
        eliminarElemento,
        vaciar,
        sumarTotalPedido,
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider