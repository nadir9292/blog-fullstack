import Head from "next/head"
import Footer from "./Footer"
import NavBar from "./NavBar"

const Layout = (props) => {
  const { title, children } = props

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <NavBar title={title}></NavBar>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
