const apiCloudUrl = 'https://api.cloudinary.com/v1_1/de5nialrr/image/upload'

export async function subirImagen (archivo) {
  const formDatos = new FormData()

  formDatos.append('file', archivo)
  formDatos.append('upload_preset', 'imageimg')

  const options = {
    method: 'POST',
    body: formDatos
  }

  const imagen = obtenerImagenDeCloudinary(options)

  return imagen
}

async function obtenerImagenDeCloudinary (options) {
  const respuesta = await fetch(apiCloudUrl, options)
  const dato = await respuesta.json()

  return dato
}
