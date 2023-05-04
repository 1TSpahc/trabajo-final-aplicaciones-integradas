import { RaceBy } from '@uiball/loaders'
import { useEffect, useState } from 'react'

export function Cargando () {
  const [color, setColor] = useState('')

  useEffect(() => {
    // aqui verificamos si el modo oscudo esta activa si es asi cambiamos el color
    // de la animacion de carga

    if (document.documentElement.classList.contains('modoOscuro')) {
      setColor('white')
    } else {
      setColor('black')
    }
  }, [])

  return (
    <RaceBy
      size={80}
      lineWeight={5}
      speed={1.4}
      color={color}
    />
  )
}
