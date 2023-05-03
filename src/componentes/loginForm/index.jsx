import { useLocation } from 'wouter'
import { useAdmin } from '../../hooks/useAdmin'
import { SubTitulo } from '../Textos/SubTitulos'
import { useState } from 'react'
import { Error } from '../error'

import './styles.css'
import { guardardLocalStorage } from '../../utilidades'

export function LoginForm () {
  const { admin } = useAdmin()
  const [pagina, setPagina] = useLocation()
  const [error, setError] = useState(null)

  const enSubmit = (event) => {
    event.preventDefault()
    const { correo, contrasena } = Object.fromEntries(new FormData(event.target))

    if (correo === admin.admin_correo && contrasena === admin.admin_password) {
      guardardLocalStorage('usuario', admin.admin_sesion)
      setPagina('/inicio')
    } else {
      setError(true)
    }
  }
  return (
    <section className='login'>
      <form className='login__form' onSubmit={enSubmit}>
        <SubTitulo>Iniciar sesion</SubTitulo>
        <label htmlFor='' className='login__label '>
          Correo
          <input type='text' className='login__input' name='correo' />
        </label>

        <label htmlFor='' className='login__label '>
          Contraseña
          <input type='password' className='login__input' name='contrasena' />
        </label>
        {
          error && <Error>Correo & Contraseña incorrecta</Error>
        }
        <button className='login__btn'>Ingresar</button>
      </form>
    </section>
  )
}
