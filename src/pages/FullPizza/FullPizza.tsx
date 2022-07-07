import React, { FC, useEffect } from 'react'
import { Path } from 'enums'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { useSelector } from 'react-redux'
import { getPizzaItem } from 'redux/slices/pizzasSlice'
import { selectPizzaItem } from 'redux/selectors/pizzas'
import { useTypedDispatch } from 'hooks/useTypedDispatch'

export const FullPizza: FC = (): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const { pizzaId } = useParams()
	const navigate = useNavigate()

	const pizzaItem = useSelector(selectPizzaItem)

	useEffect(() => {
		//@ts-ignore
		dispatch(getPizzaItem(pizzaId))
	}, [])

	if (!pizzaItem) {
		navigate(Path.home)
	}

	return (
		<div className='container'>
			<img src={pizzaItem.imageUrl} />
			<h2>{pizzaItem.title}</h2>
			<h4>{pizzaItem.price} ₽</h4>
			<Link to={Path.home}>
				<button className='button button--outline button--add'>
					<span>Назад</span>
				</button>
			</Link>
		</div>
	)
}
