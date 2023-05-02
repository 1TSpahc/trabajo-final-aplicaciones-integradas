import { guardardLocalStorage } from '../../utilidades'
import './styles.css'

const todasLasCategorias = [
  'Selecciona',
  'Hombre',
  'Mujer',
  'Calzado',
  'Accesorios'
]

export function Categoria ({ select } = { select: null }) {
  const selectCategoria = (e) => {
    const categoriaSeleccionada = e.target.value
    guardarCategoriaLocalStorage(categoriaSeleccionada)
  }

  const guardarCategoriaLocalStorage = (valor) => {
    guardardLocalStorage('categoria', valor)
  }

  return (
    <select name='select-categoria' id='categoria' className='categoria-contenedor' onChange={selectCategoria} defaultValue={select}>
      {
        todasLasCategorias.map((categoria, index) => {
          return <option key={index} defaultValue={categoria} className='categoria__item'>{categoria}</option>
        })
    }
    </select>
  )
}
