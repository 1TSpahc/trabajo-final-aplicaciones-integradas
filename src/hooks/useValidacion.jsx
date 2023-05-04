import { useLocation } from 'wouter'
import { obtenerLocalStorage } from '../utilidades'

export function useValidacion () {
  const [pagina, setPagina] = useLocation()
  const usuario = obtenerLocalStorage('usuario')

  if (!usuario) {
    setPagina('/')
  }
}
