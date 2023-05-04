import { createPortal } from 'react-dom'
import { LoginForm } from '../../componentes/loginForm'
import { useEffect } from 'react'

export function Login () {
  useEffect(() => {
    document.documentElement.classList.add('desactivar')
  }, [])
  return (
    <>
      {
        createPortal(<LoginForm />, document.body)
      }
    </>
  )
}
