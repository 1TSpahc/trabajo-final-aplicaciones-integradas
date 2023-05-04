import './styles.css'
import { Cargando } from '../../componentes/Cargando'
import { ListaProductos } from '../../componentes/productosLista'
import { useProductos } from '../../hooks/useProductos'

import { motion } from 'framer-motion'

export function Productos () {
  const { cargando, productos, setProductos } = useProductos()

  return (
    <motion.section className={`${cargando ? 'contenedor-cargando' : ''}`} initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
      {
        cargando ? <Cargando /> : <ListaProductos productos={productos} actualizar={setProductos} />
      }
    </motion.section>

  )
}
