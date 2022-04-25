import AppContextProvider from "../src/components/AppContext"
import "../styles/globals.css"

const id = (x) => x

const App = ({ Component, pageProps, ...otherProps }) => {
  const getLayout = Component.getLayout || id

  return getLayout(
    <AppContextProvider>
      <Component {...pageProps} {...otherProps} />
    </AppContextProvider>
  )
}

export default App
