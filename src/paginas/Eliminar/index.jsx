// frame-motion
import { motion } from 'framer-motion'
import { useState } from 'react'
import { validarUsuario } from '../../utilidades'
import { useAdmin } from '../../hooks/useAdmin'

import { SubTitulo } from '../../componentes/Textos/SubTitulos'
import { Buscar } from '../../componentes/buscar'
import { Formulario } from '../../componentes/formulario'
import { Cargando } from '../../componentes/Cargando'

export function Eliminar () {
  const [producto, setProducto] = useState(null)
  const { cargando, admin } = useAdmin()

  if (admin) {
    validarUsuario()
  }
  return (
    <div className={`${cargando ? 'contenedor-cargando' : ''}`}>
      {
      cargando
        ? <Cargando />
        : (
          <motion.section initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
            <SubTitulo>Eliminar Producto</SubTitulo>
            <Buscar estado={setProducto} />
            {
              producto && <Formulario producto={producto} textoBtn='Eliminar producto' />
            }
          </motion.section>
          )
    }
    </div>
  )
}
