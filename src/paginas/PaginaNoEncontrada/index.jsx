import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'wouter'

import { SubTitulo } from '../../componentes/Textos/SubTitulos'
import './styles.css'

export function PaginaNoEncontrada () {
  useEffect(() => {
    document.documentElement.classList.add('desactivar')
  }, [])

  return (
    <motion.section className='pagina-no-encontrada' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
      <SubTitulo>Pagina no encontrada</SubTitulo>
      <Link to='/inicio' className='pagina-no-encontrada__btn'>Ir a inicio</Link>
    </motion.section>
  )
}
