import { SubTitulo } from '../../componentes/Textos/SubTitulos'
// framer-motion
import { motion } from 'framer-motion'
import { Productos } from '../Productos'
import { Crear } from '../Crear'
import { Editar } from '../Editar'

export function Inicio () {
  return (
    <>
      <motion.div initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
        <SubTitulo>Inicio</SubTitulo>
      </motion.div>
    </>

  )
}
