import './styles.css'
import { Lista } from './lista'
import { Extra } from './extra'
import { IconoCerrarSesion } from '../iconos'
import { useLocation } from 'wouter'

export function Navegacion () {
  const [pagina, setPagina] = useLocation()

  const handleCLick = () => {
    setPagina('/')
  }
  return (
    <nav className='navegacion'>
      <h1 className='navegacion__logo'>Sport Center</h1>
      <ul className='navegacion__ul'>
        <Lista />
        <Extra />
      </ul>
      <div className='navegacion__cerrar-sesion' onClick={handleCLick}>
        <IconoCerrarSesion />
        Cerrar sesion
      </div>
    </nav>
  )
}
