import { useContext } from 'react'
import { Context } from '../contexto/Contexto'

export function useContexto () {
  const { productos, setProductos } = useContext(Context)

  return {
    productos,
    setProductos
  }
}
