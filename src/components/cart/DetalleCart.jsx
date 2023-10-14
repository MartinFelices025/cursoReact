import React, { useContext, useState } from 'react'
import CartContext from '../../provider/cartContext'
import UsuarioContext from '../../provider/usuarioContext';
import { useNavigate } from 'react-router-dom'
import { addDoc } from "firebase/firestore"
import { obtenerElementos } from '../../conexion/conexionDB';
import Swal from 'sweetalert2';
const DetalleCart = () => {
    const [orderId, setOrderId] = useState("")
    const { carrito, eliminarElemento, vaciar, sumarTotalPedido } = useContext(CartContext)
    const { usuario } = useContext(UsuarioContext);
    const navigate = useNavigate()

    const agregarCart = () => {
        const pedido =
        {
            comprador: { usuarioId: usuario.id, usuario: usuario.Usuario, email: usuario.Email },
            productos: carrito,
            creado: new Date(),
            total: sumarTotalPedido()
        }

        addDoc(obtenerElementos("pedidos"), pedido)
            .then(res =>
                Swal.fire({
                    title: 'Muchas gracias por su compra!',
                    text: 'El pedido fue procesado correctamente. Cod: ' + res.id,
                    icon: 'success',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/");
                    }
                })
            )
            .catch(err => console.log(err))

        vaciar()

    }
    return (
        <div>
            {
                carrito.map(elemento => (
                    <div className="contenedor-elemento" key={elemento.id}>
                        <img src={`/src/components/imagenes/${elemento.img}`} className="img-cart" />
                        <div className="texto-y-botones">
                            <p>Producto: {elemento.titulo}</p>
                            <p>Cantidad: {elemento.cantidad}</p>
                            <p>Precio: {`$ ${elemento.precio}`}</p>

                        </div>
                        <button onClick={() => eliminarElemento(elemento.id)} className="btn btn-danger btn-eliminar">Eliminar</button>

                    </div>
                ))
            }
            {<p>Total: ${sumarTotalPedido()}</p>}
            {
                carrito.length > 0 &&
                <button className='btn btn-primary' onClick={agregarCart}>Enviar Pedido</button>
            }
        </div>
    )
}

export default DetalleCart