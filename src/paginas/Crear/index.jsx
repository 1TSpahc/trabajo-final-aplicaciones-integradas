import { Cargando } from '../../componentes/Cargando'
import { SubTitulo } from '../../componentes/Textos/SubTitulos'
import { FormularioCrear } from '../../componentes/formularioCrear'
import { useAdmin } from '../../hooks/useAdmin'
import { validarUsuario } from '../../utilidades'
import './styles.css'

// frame-motion
import { motion } from 'framer-motion'

export function Crear () {
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
            <motion.section className='crear' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
              <SubTitulo>Crear un Producto</SubTitulo>
              <FormularioCrear />
            </motion.section>
            )
      }
    </div>
  )
}
