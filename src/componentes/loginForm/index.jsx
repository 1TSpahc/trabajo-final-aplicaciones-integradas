import { motion } from 'framer-motion'
import { useLocation } from 'wouter'
import { useAdmin } from '../../hooks/useAdmin'
import { useState } from 'react'

import { guardardLocalStorage, obtenerLocalStorage } from '../../utilidades'

import { Cargando } from '../Cargando'
import { Notificacion } from '../notificacion'
import { SubTitulo } from '../Textos/SubTitulos'

import './styles.css'

export function LoginForm () {
  const { cargando, admin } = useAdmin()
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

  if (admin) {
    const usuario = obtenerLocalStorage('usuario')

    if (usuario === admin.admin_sesion) {
      setPagina('/inicio')
      return
    }
  }

  return (
    <>
      <motion.section className='login' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
        {
          cargando
            ? <Cargando />
            : (
              <form className='login__form ' onSubmit={enSubmit}>
                <SubTitulo>Iniciar sesion</SubTitulo>
                <label htmlFor='' className='login__label '>
                  Correo
                  <input type='text' className='login__input' name='correo' required />
                </label>

                <label htmlFor='' className='login__label '>
                  Contraseña
                  <input type='password' className='login__input' name='contrasena' required />
                </label>
                {
                  error && <Notificacion status='error'>Correo & Contraseña incorrecta</Notificacion>
                }
                <button className='login__btn'>Ingresar</button>
              </form>
              )
        }
      </motion.section>
    </>
  )
}
