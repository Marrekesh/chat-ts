import { FC } from 'react'
import c from './burger.module.css'

const Burger: FC = () => {

		const active = false

		const style = active ? `${c.burgerChild} + ${c.active}` : c.burgerChild

		return (
			<div className={c.burger}>
				<div className={style}></div>
				<div className={style}></div>
				<div className={style}></div>
			</div>

		)
	}

export default Burger