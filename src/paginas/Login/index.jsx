import { createPortal } from 'react-dom'
import './styles.css'
import { LoginForm } from '../../componentes/loginForm'

export function Login () {
  return (
    <>
      {
        createPortal(<LoginForm />, document.body)
    }
    </>
  )
}
