import './styles.css'
import { Cargando } from '../../componentes/Cargando'
import { ListaProductos } from '../../componentes/productosLista'
import { useProductos } from '../../hooks/useProductos'

export function Productos () {
  const { cargando, productos } = useProductos()

  return (
    <section className={`${cargando ? 'contenedor-productos-cargando' : ''}`}>
      {
        cargando ? <Cargando /> : <ListaProductos productos={productos} />
      }
    </section>

  )
}
