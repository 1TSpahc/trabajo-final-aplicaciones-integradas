import { Route, Switch } from 'wouter'

import { Navegacion } from './componentes/navegacion'

import { Inicio } from './paginas/Inicio'
import { Productos } from './paginas/Productos'
import { Crear } from './paginas/Crear'
import { Editar } from './paginas/Editar'
import { Eliminar } from './paginas/Eliminar'
import { Login } from './paginas/Login'
import { PaginaNoEncontrada } from './paginas/PaginaNoEncontrada'

function App () {
  return (
    <>
      <Navegacion />
      <Switch>
        <Route path='/' component={Login} />
        <Route path='/inicio' component={Inicio} />
        <Route path='/productos' component={Productos} />
        <Route path='/crear' component={Crear} />
        <Route path='/editar' component={Editar} />
        <Route path='/eliminar' component={Eliminar} />

        <Route>
          <PaginaNoEncontrada />
        </Route>
      </Switch>

    </>
  )
}

export default App
