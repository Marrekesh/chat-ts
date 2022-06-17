import c from './input.module.css'


const Input = ({...props}) => {
  
    return (
        <input className={c.input} {...props} />
    )
}

export default Input