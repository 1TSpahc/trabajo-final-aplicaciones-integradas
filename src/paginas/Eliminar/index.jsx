import { useState } from 'react'
import { SubTitulo } from '../../componentes/Textos/SubTitulos'
import { Buscar } from '../../componentes/buscar'
import { Formulario } from '../../componentes/formulario'

// frame-motion
import { motion } from 'framer-motion'

export function Eliminar () {
  const [producto, setProducto] = useState(null)
  return (
    <motion.section initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
      <SubTitulo>Eliminar Producto</SubTitulo>
      <Buscar estado={setProducto} />
      {
        producto && <Formulario producto={producto} textoBtn='Eliminar producto' />
      }
    </motion.section>
  )
}
