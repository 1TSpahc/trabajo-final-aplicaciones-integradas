import { SubTitulo } from '../../componentes/Textos/SubTitulos'
// framer-motion
import { motion } from 'framer-motion'

import { useAdmin } from '../../hooks/useAdmin'
import { Cargando } from '../../componentes/Cargando'
import { validarUsuario } from '../../utilidades'
import { useEffect } from 'react'

export function Inicio () {
  const { cargando, admin } = useAdmin()

  if (admin) {
    validarUsuario()
  }

  useEffect(() => {
    document.documentElement.classList.remove('desactivar')
  }, [])

  return (
    <div className={`${cargando ? 'contenedor-cargando' : ''}`}>
      {
      cargando
        ? <Cargando />
        : (
          <motion.div initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
            <SubTitulo>Inicio</SubTitulo>
          </motion.div>
          )
     }
    </div>

  )
}
