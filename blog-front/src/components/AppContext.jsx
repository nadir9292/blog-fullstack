import { createContext, useCallback, useEffect, useState } from "react"

const initialJWT =
  typeof window === "undefined" ? null : localStorage.getItem("session_jwt")

export const AppContext = createContext(null)

const AppContextProvider = (props) => {
  const [jwt, setJWT] = useState(initialJWT)

  const saveJWT = useCallback((jwt) => {
    localStorage.setItem("session_jwt", jwt)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem("session_jwt")
    setJWT(null)
  })

  return <AppContext.Provider {...props} value={{ saveJWT, logout, jwt }} />
}

export default AppContextProvider
