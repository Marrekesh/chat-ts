import c from './errorBlock.module.css'

interface IErrorBlock {
    children: React.ReactNode
}


const ErrorBlock = ({children}: IErrorBlock) => {
	return (
		<div className={c.errorBlock}>
			{children}
		</div>
	)
}

export default ErrorBlock