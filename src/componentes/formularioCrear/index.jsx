import { useLocation } from 'wouter' // con el useLocation podemos cambiar la ruta de la pagina
import { useEffect, useState } from 'react'

import { crearImagenPreview, removerLocalStorage } from '../../utilidades'
import { Categoria } from '../categoria'

import './styles.css'
import { subirImagen } from '../../servicios/cloudinary'
import { insertarDatos } from '../../servicios/API'
import { objetoPlantilla } from '../../servicios/API/estructuraObj'
import { useProductos } from '../../hooks/useProductos'

export function FormularioCrear () {
  const [pagina, setPagina] = useLocation()

  //  Creamos los estados para el productoId, achiveCloud y la imagenPreview
  const [productoId, setProductoId] = useState('')
  const [archivoCloud, setArchivoCloud] = useState(null)
  const [imagenPreview, setImagenPreview] = useState(null)
  const imagenDefault = 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'

  const { productos } = useProductos()

  /* ---------------Al enviarse el formularoi -------------------- */

  // cuando el usuario le de a "crear producto"
  // se ejecutara la funcion enSubmit
  // esta funcion lo que hace es subir imagen a cloudinary y insertar el producto creado a la base de datos
  // y por ultimo redireccionar al usuario a la pagina de productos para que pueda ver el producto creado en la tabla

  const enSubmit = (e) => {
    e.preventDefault()
    generarProductoId()
    subirImagen(archivoCloud).then((imagen) => {
      const nuevoProducto = objetoPlantilla(e, imagen.url, imagenDefault)
      insertarDatos(nuevoProducto)
      setPagina('/productos')
    })
  }

  /* ---------------Generar el id del producto cuando el usuario entre al formulario para crear un producto -------------------- */

  const generarProductoId = () => {
    const longitud = productos.length - 1
    const idDelUltimoProducto = productos[longitud].id
    const nuevoCodigoProducto = `PECH4P5T1-${idDelUltimoProducto + 1}`
    setProductoId(nuevoCodigoProducto)
  }

  /* ---------------Esta funcion se encarga de mostrar visualmente la imagen cuando el usuario la selecciona en su administrador de archivos -------------------- */

  const generarImagen = (event) => {
    const { file, url } = crearImagenPreview(event)
    setArchivoCloud(file)
    setImagenPreview(url)
  }

  /* ---------------El useEffect es un hook de react que permite qjecutar codigo cuando el componente (formulario) este montado -------------------- */

  // luego ejecutamos la funcion generarProductoId para generar el id del producto
  // y por ultimo removemos el valor de categoria del localStorage

  useEffect(() => {
    // removemos el valor de categoria del localStorage
    removerLocalStorage('categoria')
  }, [])

  return (
    <div className='contenedor-form'>
      <form className='form' onSubmit={enSubmit}>
        <label htmlFor='' className='form__label label'>
          Producto ID
          <input type='text' name='productosId' id='' className='label__input' readOnly placeholder='El id se genera automaticamente' value={productoId} />
        </label>

        <label htmlFor='' className='form__label label'>
          Nombre del Producto
          <input type='text' name='nombre' id='' className='label__input' required />
        </label>

        <label htmlFor='' className='form__label label'>
          Precio
          <input type='text' name='precio' id='' className='label__input' required />
        </label>

        <label htmlFor='' className='form__label label'>
          Stock
          <input type='number' name='stock' id='' className='label__input' required />
        </label>

        <label htmlFor='' className='form__label label'>
          Categoria del Producto
          <Categoria className='label__input' required />
        </label>

        <label htmlFor='' className='form__label label'>
          Imagen del Producto
          <input type='file' name='imagen' id='' className='label__input' accept='.jpg, .png, .jpeg, .webp' onChange={generarImagen} required />
        </label>

        <button className='form__btn' type='submit'>Crear Producto</button>
      </form>
      <img src={`${imagenPreview ? imagenPreview: imagenDefault}`} alt='imagen del producto' /> {/* eslint-disable-line */}
    </div>

  )
}
