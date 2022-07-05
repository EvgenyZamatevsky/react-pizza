import React, { FC } from 'react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from 'redux/slices/filterSlice'
import { ReturnComponentType } from 'types'

export type CategoriesPropsType = {
	category: number
}

export const Categories: FC<CategoriesPropsType> = memo(({ category }): ReturnComponentType => {

	const dispatch = useDispatch()

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	const renderCategories = categories.map((c, index) => {

		const onSelectPizzaCategoryClick = (): void => {
			dispatch(setCategory(index))
		}

		return (
			<li
				key={index}
				className={category === index ? 'active' : ''}
				onClick={onSelectPizzaCategoryClick}>
				{c}
			</li>
		)
	})

	return (
		<div className='categories'>
			<ul>{renderCategories}</ul>
		</div>
	)
})
