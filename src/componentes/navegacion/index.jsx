import './styles.css'
import { Lista } from './lista'

export function Navegacion () {
  return (
    <nav className='navegacion'>
      <h1 className='navegacion__logo'>Sport Center</h1>
      <ul className='navegacion__ul'>
        <Lista />
      </ul>
      <h3 className='navegacion__cerrar-sesion'>Cerrar sesion</h3>
    </nav>
  )
}
