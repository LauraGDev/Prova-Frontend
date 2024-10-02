import './button.scss'

const Button = ({text, onClick}) => {
  return (
    <button className='btn' onClick={onClick}>
      {text} Generar
    </button>
  )
}

export default Button
