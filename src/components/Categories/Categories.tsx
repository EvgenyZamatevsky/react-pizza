import React, { FC } from 'react'
import { memo } from 'react'
import { ReturnComponentType } from 'types'

export type CategoriesPropsType = {
	pizzaCategory: number
	handleSelectPizzaCategoryClick: (index: number) => void
}

export const Categories: FC<CategoriesPropsType> = memo(({ pizzaCategory, handleSelectPizzaCategoryClick }): ReturnComponentType => {

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	const renderCategories = categories.map((category, index) => {

		const onSelectPizzaCategoryClick = (): void => handleSelectPizzaCategoryClick(index)

		return (
			<li
				key={index}
				className={pizzaCategory === index ? 'active' : ''}
				onClick={onSelectPizzaCategoryClick}>
				{category}
			</li>
		)
	})

	return (
		<div className='categories'>
			<ul>{renderCategories}</ul>
		</div>
	)
})
