import React, { FC } from 'react'
import { ReturnComponentType } from 'types'

export type CategoriesPropsType = {
	currentCategory: number
	handleSelectCurrentCategoryClick: (index: number) => void
}

export const Categories: FC<CategoriesPropsType> = ({ currentCategory, handleSelectCurrentCategoryClick }): ReturnComponentType => {

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	const renderCategories = categories.map((category, index) => {

		const onSelectCurrentCategoryClick = (): void => handleSelectCurrentCategoryClick(index)

		return (
			<li
				key={index}
				className={currentCategory === index ? 'active' : ''}
				onClick={onSelectCurrentCategoryClick}>
				{category}
			</li>
		)
	})

	return (
		<div className='categories'>
			<ul>{renderCategories}</ul>
		</div>
	)
}
