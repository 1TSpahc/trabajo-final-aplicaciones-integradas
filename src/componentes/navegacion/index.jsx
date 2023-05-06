import { useLocation } from 'wouter'
import { useAdmin } from '../../hooks/useAdmin'

import { editarCredencialesDelAdmin } from '../../servicios/API'
import { objetoPlantillaAdmin } from '../../servicios/API/estructuraObj'

import { Lista } from './lista'
import { Extra } from './extra'
import { IconoCerrarSesion } from '../iconos'
import { removerLocalStorage } from '../../utilidades'

import './styles.css'

export function Navegacion () {
  const { admin } = useAdmin()
  const [pagina, setPagina] = useLocation()

  const enCerrarSesion = async () => {
    removerLocalStorage('usuario')
    const enviarNuevoAdmin = objetoPlantillaAdmin(admin)
    const estatus = await editarCredencialesDelAdmin(enviarNuevoAdmin, admin.id)

    if (estatus === 204) {
      setPagina('/')
    }
  }

  return (
    <nav className='navegacion'>
      <h1 className='navegacion__logo'>Sport Center</h1>
      <ul className='navegacion__ul'>
        <Lista />
        <Extra />
      </ul>
      <div className='navegacion__cerrar-sesion' onClick={enCerrarSesion}>
        <IconoCerrarSesion />
        Cerrar sesion
      </div>
    </nav>
  )
}
