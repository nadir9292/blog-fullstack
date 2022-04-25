const Popup = (props) => {
  return props.trigger ? (
    <div className="popup bg-green-500 px-4 py-2 rounded mt-5 shadow-lg">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ""
  )
}

export default Popup
