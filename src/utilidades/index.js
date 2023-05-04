// formatear la fecha

import { useLocation } from 'wouter'

const diaDeSemanas = [
  {
    numero: 0,
    dia: 'Domingo'
  },
  {
    numero: 1,
    dia: 'Lunes'
  },
  {
    numero: 2,
    dia: 'Martes'
  },
  {
    numero: 3,
    dia: 'Miercoles'
  },
  {
    numero: 4,
    dia: 'Jueves'
  },
  {
    numero: 5,
    dia: 'Viernes'
  },
  {
    numero: 6,
    dia: 'Sabado'
  }
]

const meses = [
  {
    numero: 0,
    mes: 'Enero'
  },
  {
    numero: 1,
    mes: 'Febrero'
  },
  {
    numero: 2,
    mes: 'Marzo'
  },
  {
    numero: 3,
    mes: 'Abril'
  },
  {
    numero: 4,
    mes: 'Mayo'
  },
  {
    numero: 5,
    mes: 'Junio'
  },
  {
    numero: 6,
    mes: 'julio'
  },
  {
    numero: 7,
    mes: 'Agosto'
  },
  {
    numero: 8,
    mes: 'Septiembre'
  },
  {
    numero: 9,
    mes: 'Obtubre'
  },
  {
    numero: 10,
    mes: 'Noviembre'
  },
  {
    numero: 11,
    mes: 'Diciembre'
  }
]

export function formatearFecha (fecha) {
  const date = new Date(fecha) // fecha a formatear
  const day = diaDeSemanas[date.getDay()].dia // dia de la semana
  const dayNumber = date.getDate() // numero del dia
  const month = meses[date.getMonth()].mes // mes de la fecha
  const year = date.getFullYear() // año de la fecha

  return `${day} ${dayNumber} de ${month} del ${year}`
}

// guardar en localstorage

export function guardardLocalStorage (propiedad, valor) {
  window.localStorage.setItem(propiedad, valor)
}

export function obtenerLocalStorage (propiedad, valor) {
  return window.localStorage.getItem(propiedad, valor)
}

export function removerLocalStorage (propiedad) {
  window.localStorage.removeItem(propiedad)
}

// generar imagen cuando el usuario la seleccione desde su propio dispositivo

export const crearImagenPreview = (event) => {
  const file = event.target.files[0]
  const url = URL.createObjectURL(file)

  return {
    file,
    url
  }
}

// Generar token

export function generarNuevoToken () {
  return window.crypto.randomUUID()
}

// el usuario esta log
export function validarUsuario () {
  const [pagina, setPagina] = useLocation()
  const usuario = obtenerLocalStorage('usuario')

  if (!usuario) {
    setPagina('/')
  }
}
