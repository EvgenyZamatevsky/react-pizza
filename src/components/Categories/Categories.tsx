import React, { FC, useState } from 'react'
import { ReturnComponentType } from 'types'

export type CategoriesType = 'Все' | 'Мясные' | 'Вегетарианская' | 'Гриль' | 'Острые' | 'Закрытые'

export type CategoriesPropsType = {

}

export const Categories: FC<CategoriesPropsType> = (): ReturnComponentType => {

	const [currentCategory, setCurrentCategory] = useState<CategoriesType>('Все')

	const categories: CategoriesType[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	const renderCategories = categories.map((category, index) => {

		const onSelectCurrentCategoryClick = (): void => setCurrentCategory(category)

		return <li key={index} className={currentCategory === category ? 'active' : ''} onClick={onSelectCurrentCategoryClick}>{category}</li>
	})

	return (
		<div className='categories'>
			<ul>{renderCategories}</ul>
		</div>
	)
}
