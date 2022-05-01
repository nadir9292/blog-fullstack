import { createContext, useCallback, useState } from "react"

const initialJWT =
  typeof window === "undefined" ? null : localStorage.getItem("session_jwt")

const initialUserId =
  typeof window === "undefined" ? null : localStorage.getItem("userId")

export const AppContext = createContext(null)

const AppContextProvider = (props) => {
  const [jwt, setJWT] = useState(initialJWT)
  const [userId, setUserId] = useState(initialUserId)

  const saveJWT = useCallback((jwt, userId) => {
    localStorage.setItem("session_jwt", jwt)
    localStorage.setItem("userId", userId)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem("session_jwt")
    localStorage.removeItem("userId")
    setJWT(null)
    setUserId(null)
  })

  return (
    <AppContext.Provider
      {...props}
      value={{ saveJWT, setUserId, logout, jwt, userId }}
    />
  )
}

export default AppContextProvider
