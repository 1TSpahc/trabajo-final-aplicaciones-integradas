import { useState, useEffect } from 'react'
import { obtenerProductosDeApi } from '../servicios'

export function useProductos () {
  const [cargando, setCargando] = useState(false)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    setCargando(true)

    obtenerProductosDeApi()
      .then(productos => setProductos(productos))
      .finally(() => setCargando(false))
  }, [])

  return {
    cargando,
    productos,
    setProductos
  }
}
