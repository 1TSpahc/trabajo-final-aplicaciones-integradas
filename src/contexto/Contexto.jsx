import React, { useState } from 'react'

export const Context = React.createContext()

export function ContextProvider ({ children }) {
  const [productos, setProductos] = useState([])

  return (
    <Context.Provider value={{ productos, setProductos }}>
      {children}
    </Context.Provider>
  )
}
