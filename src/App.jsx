import { Route } from 'wouter'
import { ContextProvider } from './contexto/Contexto'

import './App.css'
import { Navegacion } from './componentes/navegacion'
import { Inicio } from './paginas/Inicio'
import { Productos } from './paginas/Productos'
import { Crear } from './paginas/Crear'
import { Editar } from './paginas/Editar'
import { Eliminar } from './paginas/Eliminar'

function App () {
  return (
    <ContextProvider>
      <Navegacion />
      <Route path='/' component={Inicio} />
      <Route path='/productos' component={Productos} />
      <Route path='/crear' component={Crear} />
      <Route path='/editar' component={Editar} />
      <Route path='/eliminar' component={Eliminar} />
    </ContextProvider>
  )
}

export default App
