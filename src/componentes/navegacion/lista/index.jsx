import { useState } from 'react'
import { Link } from 'wouter'

import { IconoCasa, IconoLista, IconoCrear, IconoEditar, IconoEliminar } from '../../iconos'

export function Lista () {
  const links = [
    {
      icono: IconoCasa,
      texto: 'Inicio',
      url: '/inicio',
      active: true
    },
    {
      icono: IconoLista,
      texto: 'Productos',
      url: '/productos',
      active: false
    },
    {
      icono: IconoCrear,
      texto: 'Crear',
      url: '/crear',
      active: false
    },
    {
      icono: IconoEditar,
      texto: 'Editar',
      url: '/editar',
      active: false
    },
    {
      icono: IconoEliminar,
      texto: 'Eliminar',
      url: '/eliminar',
      active: false
    }

  ]

  // ----------------------- Crear un estado en rect -----------------------
  // Con este estado lo que hacemos es guardar los enlaces que tenemos en el array de arriba

  const [enlaces, setEnlaces] = useState(links)

  // ----------------------- Reiniciar los enlaces -----------------------
  // Con esta funcion lo que hacemos es activar el color al enlace cuando el usuario haga click en el

  const manejadorDeClick = (obj) => {
    resetearEnlaces()

    const nuevoEnlaces = [...enlaces] // realizamos una copia del estado enlaces que seria el array 'links'
    const buscarEnlace = nuevoEnlaces.find((link) => link.texto === obj.texto) // Con este metodo buscamos al enlace que el usuario hizo click dentro del array links
    buscarEnlace.active = true

    setEnlaces(nuevoEnlaces) // con el setEnlaces actualizamos el estado enlaces con el nuevo array que contiene el enlace activo
  }

  // ----------------------- Reiniciar los enlaces -----------------------
  // Esta funcion se encarga de reiniciar los enlaces

  const resetearEnlaces = () => {
    enlaces.forEach((link) => { link.active = false })
  }

  return (
    <>
      {
            enlaces.map((enlace, index) => {
              return (
                <li key={index} className={`navegacion__li ${enlace.active ? 'li-active' : ''}`} onClick={() => manejadorDeClick(enlace)}>
                  <Link to={enlace.url} className='navegacion__enlace'>
                    <enlace.icono />
                    {enlace.texto}
                  </Link>
                </li>
              )
            })
        }
    </>
  )
}
