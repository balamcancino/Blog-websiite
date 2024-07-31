import './Button.css'

function Button({title, onClick}){

      return(
        <button onClick = {onClick} className = {`color`}> {title} </button>
    )
}

export default Button;