
const Button =({text, onClick, style}) => {
    return (
      <button className="btn btn-outline btn-primary" onClick={onClick}>{text}</button>
    )
  }
export default Button