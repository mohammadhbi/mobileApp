const Button =({text, onClick}) => {
    return (
      <button className="btn btn-outline btn-primary" onClick={onClick}>{text}</button>
    )
  }
export default Button