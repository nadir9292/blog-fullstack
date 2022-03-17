import Head from "next/head"
import Button from "./Button"
import Link from "next/link"

const Layout = (props) => {
  const { title, children } = props

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <div className="flex justify-between bg-sky-900">
          <Link href="/">
            <a>
              <h1 className="text-2xl font-bold leading-7 text-zinc-200 sm:text-3xl sm:truncate flex items-center p-2 hover:scale-105 hover:text-zinc-300">
                {title}
              </h1>
            </a>
          </Link>
          <div className="flex justify-end">
            <Link href="/register" passHref>
              <a>
                <Button type="button" variant="primary" size="lg">
                  Sign Up
                </Button>
              </a>
            </Link>

            <Link href="/login" passHref>
              <a>
                <Button type="button" variant="secondary" size="lg">
                  Sign In
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
