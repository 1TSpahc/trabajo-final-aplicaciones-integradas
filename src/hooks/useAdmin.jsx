import { useEffect, useState } from 'react'
import { obtenerAdmin } from '../servicios'

export function useAdmin () {
  const [admin, setAdmin] = useState([])

  useEffect(() => {
    obtenerAdmin()
      .then((respuesta) => {
        setAdmin(respuesta[0])
      })
  }, [])

  return {
    admin
  }
}
