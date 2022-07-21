import React, { FC, useEffect } from 'react'
import { PizzaBlock, Categories, Sort, Skeleton, Pagination } from 'components'
import { ReturnComponentType } from 'types'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { setPage } from 'store/slices/filter'
import { LoadingStatus } from 'enums'
import { selectPizzas, selectCategory, selectSort, selectPage, selectLoadingStatus, selectSearchValue } from 'store/selectors'
import { getPizzas } from 'store/asyncActions'
import { useAppDispatch } from 'store/hooks'

const FOUR_FAKE_ITEMS = 4

export const Home: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const pizzas = useSelector(selectPizzas)
	const category = useSelector(selectCategory)
	const sort = useSelector(selectSort)
	const page = useSelector(selectPage)
	const loadingStatus = useSelector(selectLoadingStatus)
	const searchValue = useSelector(selectSearchValue)

	const fakeItems = [...new Array(FOUR_FAKE_ITEMS)]
	const renderFakeItems = fakeItems.map((_, index) => <Skeleton key={index} />)
	const renderPizzas = pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza} />)

	const scrollPageUp = (): void => window.scrollTo(0, 0)

	useEffect(() => {
		dispatch(getPizzas({ category, sortProperty: sort.sortProperty, order: sort.sortProperty, searchValue, page }))
	}, [category, sort.sortProperty, searchValue, page])

	useEffect(() => {
		scrollPageUp()
	}, [])

	const handlePageChange = useCallback((page: number): void => {
		dispatch(setPage(page))
	}, [])

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories category={category} />
				<Sort sort={sort} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			{loadingStatus === LoadingStatus.ERROR ?
				<div className='content__error-info'>
					<h2>Произошла ошибка 😕</h2>
					<p>
						К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.
					</p>
				</div>
				: <div className='content__items'>
					{loadingStatus === LoadingStatus.LOADING ? renderFakeItems : renderPizzas}
				</div>}
			<Pagination page={page} handlePageChange={handlePageChange} />
		</div >
	)
}
