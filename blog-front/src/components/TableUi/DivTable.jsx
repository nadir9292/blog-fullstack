import classNames from "classnames"

const DivTable = (props) => {
  const { className, ...otherProps } = props

  return (
    <div
      {...otherProps}
      className={classNames(
        "flex flex-col -my-2 overflow-x-auto sm:-mx-3 lg:-mx-8 py-2 align-middle " +
          "inline-block min-w-full sm:px-3 lg:px-8 shadow overflow-hidden border-b" +
          " border-gray-200 sm:rounded-lg ",
        className
      )}
    ></div>
  )
}

export default DivTable
