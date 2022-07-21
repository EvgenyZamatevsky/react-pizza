import React, { FC, useEffect } from 'react'
import { Path } from 'enums'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { useSelector } from 'react-redux'
import { selectPizzaItem } from 'store/selectors'
import { getPizzaItem } from 'store/asyncActions'
import { useAppDispatch } from 'store/hooks'

export const Pizza: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const { pizzaId } = useParams()
	const navigate = useNavigate()

	const pizzaItem = useSelector(selectPizzaItem)

	useEffect(() => {
		dispatch(getPizzaItem(pizzaId as string))
	}, [])

	if (!pizzaItem) {
		navigate(Path.HOME)
	}

	return (
		<div className='container'>
			<img src={pizzaItem.imageUrl} />
			<h2>{pizzaItem.title}</h2>
			<h4>{pizzaItem.price} ₽</h4>
			<Link to={Path.HOME}>
				<button className='button button--outline button--add'>
					<span>Назад</span>
				</button>
			</Link>
		</div>
	)
}
