import { formatearFecha } from '../../../utilidades'

export function ProductosItem ({ objeto }) {
  return (
    <>
      <tr className='tabla__fila-productos'>
        <td className='id'>{objeto?.id_producto}</td>
        <td className='nombre'>{objeto?.producto_nombre}</td>
        <td className='precio'>s/{objeto?.producto_precio}</td>
        <td className='stock'>{objeto?.producto_stock}</td>
        <td className='categoria'>{objeto?.producto_categoria}</td>
        <td className='imagen'><img src={objeto?.producto_imagen} /></td>
        <td className='fecha-de-creacion'>{formatearFecha(objeto?.created_at)}</td>
      </tr>
    </>
  )
}
