import "../styles/globals.css"

const id = (x) => x

const App = ({ Component, pageProps, ...otherProps }) => {
  const getLayout = Component.getLayout || id

  return getLayout(<Component {...pageProps} {...otherProps} />)
}

export default App
