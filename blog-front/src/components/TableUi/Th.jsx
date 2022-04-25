import classNames from "classnames"

const Th = (props) => {
  const { className, ...otherProps } = props

  return (
    <th
      {...otherProps}
      className={classNames(
        "px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider",
        className
      )}
    ></th>
  )
}

export default Th
