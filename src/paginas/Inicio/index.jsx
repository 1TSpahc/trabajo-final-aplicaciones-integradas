// framer-motion
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useAdmin } from '../../hooks/useAdmin'
import { validarUsuario } from '../../utilidades'

import { SubTitulo } from '../../componentes/Textos/SubTitulos'
import { Cargando } from '../../componentes/Cargando'
import { Card } from '../../componentes/card'

import './styles.css'

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
            <h3 className='inicio__subtitle'>Estas son las acciones que tenemos disponibles en Sport Center</h3>
            <motion.section className='contenedor-tarjetas' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
              <Card>Ver tabla</Card>
              <Card>Crear producto</Card>
              <Card>Editar producto</Card>
              <Card>Eliminar producto</Card>
            </motion.section>
          </motion.div>
          )
     }
    </div>

  )
}
