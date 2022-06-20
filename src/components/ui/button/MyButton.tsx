import c from './myButton.module.css'
import {IButton} from '../../../types/componentsType'

const MyButton = ({children, className, ...props}: IButton) => {

    return (
        <button className={className} {...props}> 
            {children}
        </button>
    )
}
export default MyButton