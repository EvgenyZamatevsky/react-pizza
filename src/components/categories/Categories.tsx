import { EMPTY_STRING } from 'constants/base'
import React, { FC } from 'react'
import { memo } from 'react'
import { useAppDispatch } from 'store/hooks'
import { setCategory } from 'store/slices/filter'
import { ReturnComponentType } from 'types'

type CategoriesPropsType = {
	category: number
}

const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export const Categories: FC<CategoriesPropsType> = memo(({ category }): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const renderCategories = categories.map((item, index) => {

		const onSelectPizzaCategoryClick = (): void => {
			dispatch(setCategory(index))
		}

		return (
			<li
				key={index}
				className={category === index ? 'active' : EMPTY_STRING}
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
