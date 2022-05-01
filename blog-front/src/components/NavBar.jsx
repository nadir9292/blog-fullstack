import Link from "next/link"
import Button from "./Button"

const NavBar = (props) => {
  const { title, islogged, logout } = props

  return (
    <div className="flex justify-between bg-sky-900">
      <Link href="/">
        <a>
          <h1 className="text-2xl font-bold leading-7 text-zinc-200 sm:text-3xl sm:truncate flex items-center p-2 hover:scale-105 hover:text-zinc-300">
            {title}
          </h1>
        </a>
      </Link>
      {!islogged ? (
        <div className="flex justify-end">
          <Button type="button" variant="primary" size="lg" onClick={logout}>
            Log out
          </Button>
        </div>
      ) : (
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
      )}
    </div>
  )
}

export default NavBar
