import PropTypes from "prop-types"

// BUTTON COMPONENT THAT ACCEPTS 'CHILDREN' AND 'ONCLICK' PROPS.
const Button = ({children , onClick}) => {
  return (
    <button onClick={onClick}
     className=' px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
        {children}
    </button>
  )
}

Button.propTypes = {
    children : PropTypes.node.isRequired,
    onClick : PropTypes.node.isRequired
}
export default Button
