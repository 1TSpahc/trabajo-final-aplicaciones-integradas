import { createClient } from '@supabase/supabase-js'
import { anonKey, apiUrl } from '../config'

/* --------------------------- Funciones Crud -------------------- */

const supabaseUrl = apiUrl
const supabaseKey = anonKey
const supabase = createClient(supabaseUrl, supabaseKey)

export async function insertarDatos (datos = {}) {
  const { error } = await supabase
    .from('tabla_productos')
    .insert(datos)
}

export async function editarDatos (datos = {}, id) {
  const { status } = await supabase
    .from('tabla_productos')
    .update(datos)
    .eq('id', id)
  return status
}

export async function eliminarDatos (id) {
  const { status } = await supabase
    .from('tabla_productos')
    .delete()
    .eq('id', id)

  return status
}
