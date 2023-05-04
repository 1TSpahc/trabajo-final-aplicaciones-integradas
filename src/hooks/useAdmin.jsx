import { useEffect, useState } from 'react'
import { obtenerAdmin } from '../servicios'

export function useAdmin () {
  const [admin, setAdmin] = useState([])
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)
    obtenerAdmin()
      .then((respuesta) => {
        setAdmin(respuesta[0])
      })
      .finally(() => setCargando(false))
  }, [])

  return {
    cargando,
    admin
  }
}
