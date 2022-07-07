import React, { FC, memo, useState } from 'react'
import { PizzasType } from 'api/pizzas/types'
import { ReturnComponentType } from 'types'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from 'redux/slices/cartSlice'
import { selectCartItem } from 'redux/selectors/cart'

export type PizzaBlockPropsType = {
	pizza: PizzasType
}

const typeNames = ['тонкое', 'традиционное']

export const PizzaBlock: FC<PizzaBlockPropsType> = memo(({ pizza }): ReturnComponentType => {

	const { category, id, imageUrl, price, rating, sizes, title, types } = pizza

	const dispatch = useDispatch()

	const cartItem = useSelector(selectCartItem(id))

	const [currentSize, setCurrentSize] = useState(0)
	const [currentType, setCurrentType] = useState(0)

	const count = cartItem ? cartItem.count : 0

	const renderPizzaSizes = sizes.map((size, index) => {

		const onSelectCurrentSizeClick = (): void => setCurrentSize(index)

		return (
			<li
				key={index}
				className={currentSize === index ? 'active' : ''}
				onClick={onSelectCurrentSizeClick}>
				{size} см.
			</li>
		)
	})
	const renderPizzaTypes = types.map((type, index) => {

		const onSelectCurrentTypeClick = (): void => setCurrentType(index)

		return (
			<li
				key={index}
				className={currentType === index ? 'active' : ''}
				onClick={onSelectCurrentTypeClick}>
				{typeNames[type]}
			</li>
		)
	})

	const onAddPizzaToCartClick = (): void => {
		const pizza = { id, imageUrl, title, price, type: typeNames[currentType], size: sizes[currentSize] }
		dispatch(addItemToCart(pizza))
	}

	return (
		<div className='pizza-block-wrapper'>
			<div className='pizza-block'>
				<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
				<h4 className='pizza-block__title'>{title}</h4>
				<div className='pizza-block__selector'>
					<ul>{renderPizzaTypes}</ul>
					<ul>{renderPizzaSizes}</ul>
				</div>
				<div className='pizza-block__bottom'>
					<div className='pizza-block__price'>от {price} ₽</div>
					<button className='button button--outline button--add' onClick={onAddPizzaToCartClick}>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
								fill='white'
							/>
						</svg>
						<span>Добавить</span>
						{count > 0 && <i>{count}</i>}
					</button>
				</div>
			</div>
		</div>
	)
})
