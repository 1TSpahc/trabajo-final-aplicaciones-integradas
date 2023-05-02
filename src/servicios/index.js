import { apiUrl, anonKey } from './config'

export async function obtenerProductosDeApi () {
  const respuesta = await fetch(`${apiUrl}/rest/v1/tabla_productos?apikey=${anonKey}`)
  const datos = await respuesta.json()

  return datos
}
