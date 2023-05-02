import { SubTitulo } from '../Textos/SubTitulos'
import { ProductosItem } from './productosItem'
import './styles.css'

export function ListaProductos ({ productos }) {
  return (
    <div className='contenedor'>
      <SubTitulo>Productos de la tienda</SubTitulo>
      <table className='contenedor__tabla'>
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
      </table>
    </div>
  )
}
