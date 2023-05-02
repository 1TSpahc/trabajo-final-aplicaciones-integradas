import { useState } from 'react'
import './styles.css'
import { useProductos } from '../../hooks/useProductos'

export function Buscar ({ estado }) {
  const [productoId, setProductoId] = useState('')
  const { _, productos } = useProductos()

  const enSubmit = async (evento) => {
    evento.preventDefault()
    buscarProducto(productoId)
  }

  const alCambiarInput = (evento) => {
    const valor = (evento.target.value).toString().trim()
    setProductoId(valor)
  }

  const buscarProducto = (id) => {
    const producto = [...productos].find((producto) => producto.id_producto === id)
    estado(producto)
  }

  return (
    <form className='form-busqueda' onSubmit={enSubmit}>
      <input type='text' placeholder='Id producto' className='form-busqueda__input' onChange={alCambiarInput} />
      <button type='submit' className='form-busqueda__btn'>Buscar</button>
    </form>
  )
}
