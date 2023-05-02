import { useState, useEffect } from 'react'
import { obtenerProductosDeApi } from '../servicios'

export function useProductos () {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)
    obtenerProductosDeApi()
      .then(productos => setProductos(productos))
      .finally(() => setCargando(false))
  }, [])

  return {
    cargando,
    productos
  }
}
