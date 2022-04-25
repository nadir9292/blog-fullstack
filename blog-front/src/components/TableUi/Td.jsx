import classNames from "classnames"

const Td = (props) => {
  const { className, ...otherProps } = props

  return (
    <td
      {...otherProps}
      className={classNames("text-left px-6 py-4 whitespace-nowrap", className)}
    ></td>
  )
}

export default Td
