import classNames from "classnames"

const className = "font-bold"

const variants = {
  login_register: "text-gray-900 font-semibold font-family: Consolas",
  popup:
    "flex justify-center text-gray-900 font-semibold font-family: Consolas",
  info: "text-gray-900 font-medium pt-2",
  link: "underline underline-offset-1 text-blue-500 font-semibold",
  post_title: "text-amber-500 font-bold text-center",
  post_content: "text-zinc-200 text-center",
  post_author: "text-zinc-200 underline text-center",
}

const sizes = {
  sm: "py-1 px-1.5 text-xs",
  md: "py-1.5 px-3 text-md",
  lg: "py-2.5 px-5 text-lg",
  xl: "py-2.5 px-5 text-3xl",
}
//test git
const Text = (props) => {
  const { variant, size, ...otherProps } = props

  return (
    <h1
      {...otherProps}
      className={classNames(className, variants[variant], sizes[size])}
    />
  )
}

export default Text
