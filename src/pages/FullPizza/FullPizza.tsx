import React, { FC } from 'react'
import { Path } from 'enums'
import { Link } from 'react-router-dom'
import { ReturnComponentType } from 'types'

export type FullPizzaPropsType = {

}

export const FullPizza: FC<FullPizzaPropsType> = (): ReturnComponentType => {
	return (
		<div className='container'>
			<img src='' />
			<h2>title</h2>
			<h4>price ₽</h4>
			<Link to={Path.home}>
				<button className='button button--outline button--add'>
					<span>Назад</span>
				</button>
			</Link>
		</div>
	)
}
