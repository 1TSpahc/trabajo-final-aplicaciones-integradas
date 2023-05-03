import { SubTitulo } from '../Textos/SubTitulos'

export function LoginForm () {
  return (
    <section className='login'>
      <form className='login__form'>
        <SubTitulo>Iniciar sesion</SubTitulo>
        <label htmlFor='' className='login__label '>
          Correo
          <input type='text' className='login__input' />
        </label>

        <label htmlFor='' className='login__label '>
          Contraseña
          <input type='text' className='login__input' />
        </label>
        <button className='login__btn'>Ingresar</button>
      </form>
    </section>
  )
}
