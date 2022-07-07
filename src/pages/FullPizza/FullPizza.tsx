import React, { FC, useEffect } from 'react'
import { Path } from 'enums'
import { Link, useParams } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaItem } from 'redux/slices/pizzasSlice'
import { selectPizzaItem } from 'redux/selectors/pizzas'

export type FullPizzaPropsType = {

}

export const FullPizza: FC<FullPizzaPropsType> = (): ReturnComponentType => {

	const dispatch = useDispatch()

	const pizzaItem = useSelector(selectPizzaItem)

	const { pizzaId } = useParams()

	useEffect(() => {
		//@ts-ignore
		dispatch(getPizzaItem(pizzaId))
	}, [])

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
