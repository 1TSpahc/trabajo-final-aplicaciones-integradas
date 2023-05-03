import { createPortal } from 'react-dom'
import { LoginForm } from '../../componentes/loginForm'
import { useEffect } from 'react'

export function Login () {
  useEffect(() => {

  }, [])
  return (
    <>
      {
        createPortal(<LoginForm />, document.body)
    }
    </>
  )
}
