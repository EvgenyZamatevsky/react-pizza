import { useTypedDispatch } from 'hooks/useTypedDispatch'
import React, { FC, memo, useEffect, useRef, useState } from 'react'
import { setSort, SortPropertyEnum, SortType } from 'redux/slices/filterSlice'
import { ReturnComponentType } from 'types'

export type SortPropsType = {
	sort: SortType
}

const pizzaSortingList: SortType[] = [
	{ name: 'популярности (DESC)', sortProperty: SortPropertyEnum.RATING_DESC },
	{ name: 'популярности (ASC)', sortProperty: SortPropertyEnum.RATING_ASC },
	{ name: 'цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
	{ name: 'цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
	{ name: 'алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
	{ name: 'алфавиту (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC },
]

export const Sort: FC<SortPropsType> = memo(({ sort }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const sortRef = useRef<HTMLDivElement>(null)

	const [isVisiblePopup, setIsVisiblePopup] = useState<boolean>(false)

	const renderPizzaSorting = pizzaSortingList.map((pizzaSortList, index) => {

		const onSelectPizzaSortingClick = (): void => {
			dispatch(setSort(pizzaSortList))
			setIsVisiblePopup(false)
		}

		return (
			<li
				key={index}
				className={sort.sortProperty === pizzaSortList.sortProperty ? 'active' : ''}
				onClick={onSelectPizzaSortingClick}>
				{pizzaSortList.name}
			</li>
		)
	})

	const onToggleActiveSortClick = (): void => setIsVisiblePopup(!isVisiblePopup)

	useEffect(() => {
		const onOutsideClick = (e: any) => {
			if (!e.path.includes(sortRef.current)) {
				setIsVisiblePopup(false)
			}
		}

		document.body.addEventListener('click', onOutsideClick)

		return () => document.body.removeEventListener('click', onOutsideClick)
	}, [])

	return (
		<div className='sort' ref={sortRef}>
			<div className='sort__label' >
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
						fill='#2C2C2C'
					/>
				</svg>
				<b>Сортировка по:</b>
				<span onClick={onToggleActiveSortClick}>{sort.name}</span>
			</div>
			{isVisiblePopup &&
				<div className='sort__popup'>
					<ul>{renderPizzaSorting}</ul>
				</div>}
		</div>
	)
})
