import c from './myButton.module.css'

interface IButton {
    props?: string[]
    children: React.ReactNode
    className: string
}

const MyButton = ({children, className, ...props}: IButton) => {

    return (
        <button className={className} {...props}> 
            {children}
        </button>
    )
}
//className={c.formButton}
export default MyButton