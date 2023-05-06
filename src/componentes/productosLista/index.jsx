import { motion } from 'framer-motion'

import { SubTitulo } from '../Textos/SubTitulos'
import { Filtrar } from '../filtrar'
import { ProductosItem } from './productosItem'

import './styles.css'

export function ListaProductos ({ productos, actualizar }) {
  return (
    <div className='contenedor'>
      <SubTitulo>Productos de la tienda</SubTitulo>
      <Filtrar produc={productos} func={actualizar} />
      <motion.table className='contenedor__tabla' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
        <tbody>
          <tr className='tabla__cabecera'>
            <td>id_Producto</td>
            <td>Nombre </td>
            <td>Precio </td>
            <td>Stock </td>
            <td>Categoria </td>
            <td>Imagen</td>
            <td>Fecha de creacion</td>
          </tr>
          {
            productos && productos.map((producto) => {
              return <ProductosItem key={producto.id} objeto={producto} />
            })
          }
        </tbody>
      </motion.table>
    </div>
  )
}
