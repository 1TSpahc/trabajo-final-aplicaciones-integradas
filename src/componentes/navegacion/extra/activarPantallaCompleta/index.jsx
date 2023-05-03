import { useState } from 'react'
import { IconoPantallaCompleta, IconoPatallaMinimizada } from '../../../iconos'

export function ActivarPantallaCompleta () {
  const [interruptor, setInterruptor] = useState(false)

  const cambiarModo = () => {
    setInterruptor(!interruptor)
    activarModo()
  }

  const activarModo = () => {
    document.documentElement.requestFullscreen()
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }

  return (
    <div onClick={cambiarModo} className='modo-pantalla-btn'>
      {
        interruptor ? <IconoPatallaMinimizada /> : <IconoPantallaCompleta />
      }
    </div>
  )
}
