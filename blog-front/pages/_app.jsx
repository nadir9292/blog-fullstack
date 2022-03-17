import "../styles/globals.css"

const id = (x) => x

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || id

  return getLayout(<Component {...pageProps} />)
}

export default App
