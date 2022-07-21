import React, { FC, useState } from 'react'
import { PizzaType } from 'api/pizzas/types'
import { ReturnComponentType } from 'types'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItemToCart } from 'store/slices/cart'
import { CartItemsType } from 'store/slices/cart/types'
import { EMPTY_STRING } from 'constants/base'
import { selectCartItem } from 'store/selectors'
import { useAppDispatch } from 'store/hooks'

type PizzaBlockPropsType = {
	pizza: PizzaType
}

const typeNames: string[] = ['тонкое', 'традиционное']

export const PizzaBlock: FC<PizzaBlockPropsType> = ({ pizza }): ReturnComponentType => {

	const { id, imageUrl, price, sizes, title, types } = pizza

	const dispatch = useAppDispatch()

	const cartItem = useSelector(selectCartItem(id))

	const [currentSize, setCurrentSize] = useState<number>(0)
	const [currentType, setCurrentType] = useState<number>(0)

	const count = cartItem ? cartItem.count : 0

	const renderPizzaSizes = sizes.map((size, index) => {

		const onSelectCurrentSizeClick = (): void => setCurrentSize(index)

		return (
			<li
				key={index}
				className={currentSize === index ? 'active' : EMPTY_STRING}
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
				className={currentType === index ? 'active' : EMPTY_STRING}
				onClick={onSelectCurrentTypeClick}>
				{typeNames[type]}
			</li>
		)
	})

	const onAddPizzaToCartClick = (): void => {
		const pizza: CartItemsType = { id, imageUrl, title, price, type: typeNames[currentType], size: sizes[currentSize], count: 0, }
		dispatch(addItemToCart(pizza))
	}

	return (
		<div className='pizza-block-wrapper'>
			<div className='pizza-block'>
				<Link to={`/pizza/${id}`}>
					<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
					<h4 className='pizza-block__title'>{title}</h4>
				</Link>
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
}
