import { useRef, useState } from 'react'
import './styles.css'

export function Filtrar ({ produc, func }) { // func es la funcion de react para actualizar el producto. en este caso los productos y produc son todos los productos
  const [verTodos, setVerTodos] = useState(null)
  const productos = useRef(produc)

  const filtrarCategoria = (event) => {
    const nuevoArray = [...productos.current]
    const categoriaSeleccionada = event.target.value
    const productosFiltrados = nuevoArray.filter((producto) => producto.producto_categoria === categoriaSeleccionada)

    func(productosFiltrados)
    setVerTodos(true)
  }

  const verProductosTodos = (event) => {
    const selectElement = event.target.previousSibling
    selectElement.value = 'Categoria'

    func(productos.current)
  }

  return (
    <div className='contenedor-filtros'>
      <select name='categoria' id='' className='categoria-contenedor categoria-contenedor--filtrar' onChange={filtrarCategoria}>
        <option value='Categoria'>Categoria</option>
        <option className='categoria__item' value='Hombre'>Hombre</option>
        <option className='categoria__item' value='Mujer'>Mujer</option>
        <option className='categoria__item' value='Calzado'>Calzado</option>
        <option className='categoria__item' value='Accesorios'>Accesorio</option>
      </select>

      {
        verTodos && <button onClick={verProductosTodos} className='form-busqueda__btn'>Ver todos los productos</button>
      }
    </div>
  )
}
