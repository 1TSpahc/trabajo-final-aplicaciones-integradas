import { obtenerLocalStorage } from '../../../utilidades'

/* const crearObjeto = (event, respuestaCloudinary = null) => {
  const { productosId, nombre, precio, stock } = Object.fromEntries(new FormData(event.target))

  return {
    id_producto: productosId,
    producto_nombre: nombre,
    producto_precio: precio,
    producto_stock: stock,
    producto_categoria: obtenerLocalStorage('categoria') ?? producto.producto_categoria,
    producto_imagen: respuestaCloudinary ?? producto.producto_imagen,
    created_at: new Date()
  }
} */

export function objetoPlantilla (event, respuestaCloudinary = null, valorDefault) {
  const { productosId, nombre, precio, stock } = Object.fromEntries(new FormData(event.target))

  return {
    id_producto: productosId,
    producto_nombre: nombre,
    producto_precio: precio,
    producto_stock: stock,
    producto_categoria: obtenerLocalStorage('categoria') ?? valorDefault.producto_categoria,
    producto_imagen: respuestaCloudinary ?? valorDefault.producto_imagen,
    created_at: new Date()
  }
}
