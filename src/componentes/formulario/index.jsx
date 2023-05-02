
/* Importamos algunos hooks de react js */

import './styles.css'

import { useEffect, useState } from 'react'
import { crearImagenPreview, removerLocalStorage } from '../../utilidades' // function para crear una imagen preview y remover un item del localstorage

import { Categoria } from '../categoria' // componente
import { subirImagen } from '../../servicios/cloudinary' // servicio funcion para subir imagen a cloudinary
import { editarDatos, eliminarDatos } from '../../servicios/API' // servicios de la api para editar y eliminar datos en la base de datos
import { useLocation } from 'wouter'// hook para cambiar la ruta (url) de la pagina
import { objetoPlantilla } from '../../servicios/API/estructuraObj'// funcion para crear un objeto con los datos del formulario pra que sea enviado a la base de datos

export function Formulario ({ producto, textoBtn }) {
  const [pagina, setPagina] = useLocation()

  const [archivoCloud, setArchivoCloud] = useState(null)
  const [imagenPreview, setImagenPreview] = useState(null)

  const enSubmit = (e) => {
    e.preventDefault()
    if (textoBtn === 'Editar producto') {
      enEditar(e)
      return
    }

    if (textoBtn === 'Eliminar producto') {
      enEliminar(e)
    }
  }

  const generarImagen = (event) => {
    const { file, url } = crearImagenPreview(event)
    setArchivoCloud(file)
    setImagenPreview(url)
  }

  useEffect(() => {
    removerLocalStorage('categoria')
  }, [])

  const enEditar = async (e) => {
    // Si el usuario selecciona una imagen nueva desde su administrador de archivos se ejecutara el codigo de abajo
    if (imagenPreview !== null) {
      subirImagen(archivoCloud).then(async (imagen) => {
        const productoEditado = objetoPlantilla(e, imagen.url, producto)
        const estatus = await editarDatos(productoEditado, producto.id)
        if (estatus === 204) {
          setPagina('/productos')
        }
      })
      return
    }

    // Si el usuario no selecciona una imagen nueva desde su administrador de archivos se ejecutara el codigo de abajo
    const productoEditado = objetoPlantilla(e, null, producto)
    const estatus = await editarDatos(productoEditado, producto.id)

    if (estatus === 204) {
      setPagina('/productos')
    }
  }

  const enEliminar = async () => {
    const estatus = await eliminarDatos(producto.id)
    if (estatus === 204) {
      setPagina('/productos')
    }
  }

  return (
    <div className='contenedor-form'>
      <form className='form' onSubmit={enSubmit}>
        <label htmlFor='' className='form__label label'>
          Producto ID
          <input type='text' name='productosId' id='' className='label__input' readOnly defaultValue={producto?.id_producto} />
        </label>

        <label htmlFor='' className='form__label label'>
          Nombre del Producto
          <input type='text' name='nombre' id='' className='label__input' required defaultValue={producto?.producto_nombre} />
        </label>

        <label htmlFor='' className='form__label label'>
          Precio
          <input type='text' name='precio' id='' className='label__input' required defaultValue={producto?.producto_precio} />
        </label>

        <label htmlFor='' className='form__label label'>
          Stock
          <input type='number' name='stock' id='' className='label__input' required defaultValue={producto?.producto_stock} />
        </label>

        <label htmlFor='' className='form__label label'>
          Categoria del Producto
          <Categoria className='label__input' select={producto.producto_categoria} required />
        </label>

        <label htmlFor='' className='form__label label'>
          Imagen del Producto
          <input type='file' name='imagen' id='' className='label__input' accept='.jpg, .png, .jpeg, .webp' onChange={generarImagen} />
        </label>

        <button className='form__btn' type='submit'>{textoBtn}</button>
      </form>
      <img src={`${imagenPreview  ? imagenPreview  : producto?.producto_imagen}`} alt='' /> {/* eslint-disable-line */}
    </div>

  )
}