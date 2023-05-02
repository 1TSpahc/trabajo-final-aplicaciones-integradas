import { SubTitulo } from '../../componentes/Textos/SubTitulos'
// framer-motion
import { motion } from 'framer-motion'

export function Inicio () {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SubTitulo>Inicio</SubTitulo>
    </motion.div>
  )
}
