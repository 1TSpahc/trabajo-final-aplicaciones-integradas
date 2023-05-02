import { SubTitulo } from '../../componentes/Textos/SubTitulos'
import { FormularioCrear } from '../../componentes/formularioCrear'
import './styles.css'

// frame-motion
import { motion } from 'framer-motion'

export function Crear () {
  return (
    <motion.section className='crear' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SubTitulo>Crear un Producto</SubTitulo>
      <FormularioCrear />
    </motion.section>
  )
}
