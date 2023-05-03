import { useEffect, useState } from 'react'
import { IconoLuna, IconoSol } from '../../../iconos'

import { guardardLocalStorage, obtenerLocalStorage } from '../../../../utilidades'

export function ModoOscuro () {
  const [interruptor, setInterruptor] = useState(() => {
    const valor = JSON.parse(obtenerLocalStorage('darkMode')) ?? false

    return valor
  })

  const cambiarModo = () => {
    setInterruptor(!interruptor)
    activarDarkMode()
  }

  const activarDarkMode = () => {
    document.documentElement.classList.toggle('modoOscuro')
    guardardLocalStorage('darkMode', !interruptor)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('modoOscuro', interruptor)
  }, [])

  return (
    <div onClick={cambiarModo} className='modo-oscuro-btn'>
      {
        interruptor ? <IconoSol /> : <IconoLuna />
      }
    </div>
  )
}
