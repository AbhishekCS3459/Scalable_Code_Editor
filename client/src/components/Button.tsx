
const Button = (props: any) => {
  return (
    <button disabled={props.disabled}
      className={`bg-green-500 text-white font-bold py-1 px-6 rounded ${props.disabled && 'hover:bg-green-500' }`}
      onClick={props.onClick}>
      {props.children}
    </button>

  )
}
export default Button;
