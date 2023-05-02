import { useState } from 'react'
import { SubTitulo } from '../../componentes/Textos/SubTitulos'
import { Buscar } from '../../componentes/buscar'
import { Formulario } from '../../componentes/formulario'

// framer-motion
import { motion } from 'framer-motion'

export function Editar () {
  const [producto, setProducto] = useState(null)

  return (

    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SubTitulo>Editar Producto</SubTitulo>
      <Buscar estado={setProducto} />
      {
        producto && <Formulario producto={producto} textoBtn='Editar producto' />
      }
    </motion.section>
  )
}
