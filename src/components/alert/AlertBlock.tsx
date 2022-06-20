import c from './alertBlock.module.css'
import { IAlertBLock } from '../../types/componentsType'


const AlertBlock = ({children}: IAlertBLock) => {
	return (
		<div className={c.alertBlock}>
			{children}
		</div>
	)
}

export default AlertBlock