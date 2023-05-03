import { Route } from 'wouter'

import './App.css'
import { Navegacion } from './componentes/navegacion'
import { Inicio } from './paginas/Inicio'
import { Productos } from './paginas/Productos'
import { Crear } from './paginas/Crear'
import { Editar } from './paginas/Editar'
import { Eliminar } from './paginas/Eliminar'
import { Login } from './paginas/Login'

function App () {
  return (
    <>
      <Navegacion />
      <Route path='/' component={Login} />
      <Route path='/inicio' component={Inicio} />
      <Route path='/productos' component={Productos} />
      <Route path='/crear' component={Crear} />
      <Route path='/editar' component={Editar} />
      <Route path='/eliminar' component={Eliminar} />
    </>
  )
}

export default App
