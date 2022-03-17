import classNames from "classnames"

const className = "font-bold"

const variants = {
  primary:
    "inline-flex items-center m-1 border border-transparent rounded-lg shadow-lg  font-medium text-zinc-200 bg-teal-500 hover:bg-teal-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  secondary:
    "inline-flex items-center m-1 rounded-lg font-medium text-zinc-200 bg-sky-900 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  btnValidation:
    "inline-flex m-1 border border-transparent rounded-lg shadow-lg  font-medium text-zinc-200 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700",
}

const sizes = {
  sm: "py-1 px-1.5 text-xs",
  md: "py-1.5 px-3 text-md",
  lg: "py-2.5 px-5 text-lg",
}
//test git
const Button = (props) => {
  const { variant, size, ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={classNames(className, variants[variant], sizes[size])}
    />
  )
}

export default Button
