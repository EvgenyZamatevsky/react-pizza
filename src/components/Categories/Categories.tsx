import React, { FC } from 'react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from 'redux/slices/filterSlice'
import { ReturnComponentType } from 'types'

export type CategoriesPropsType = {
	category: number
}

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export const Categories: FC<CategoriesPropsType> = memo(({ category }): ReturnComponentType => {

	const dispatch = useDispatch()

	const renderCategories = categories.map((item, index) => {

		const onSelectPizzaCategoryClick = (): void => {
			dispatch(setCategory(index))
		}

		return (
			<li
				key={index}
				className={category === index ? 'active' : ''}
				onClick={onSelectPizzaCategoryClick}>
				{item}
			</li>
		)
	})

	return (
		<div className='categories'>
			<ul>{renderCategories}</ul>
		</div>
	)
})
