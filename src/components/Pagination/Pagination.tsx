import React, { FC, memo } from 'react'
import ReactPaginate from 'react-paginate'
import { ReturnComponentType } from 'types'
import style from './Pagination.module.scss'

export type PaginationPropsType = {
	handlePageChange: (page: number) => void
	page: number
}

export const Pagination: FC<PaginationPropsType> = memo(({ page, handlePageChange }): ReturnComponentType => {

	const onPageChange = (e: { selected: number }): void => handlePageChange(e.selected + 1)

	return (
		<ReactPaginate
			className={style.root}
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={onPageChange}
			pageRangeDisplayed={4}
			pageCount={3}
			forcePage={page - 1}
		/>
	)
})
