import React, { FC, useContext, useEffect, useState } from 'react'
import { PizzaBlock, Categories, Sort, Skeleton, Pagination } from 'components'
import { ReturnComponentType } from 'types'
import { useCallback } from 'react'
import { SearchContext } from 'context'
import { PizzasType } from 'api/pizzas/types'
import { PIZZAS } from 'api/pizzas'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory, selectSort } from 'redux/selectors/filter'
import { selectPage } from 'redux/selectors/filter'
import { setPage } from 'redux/slices/filterSlice'

export type HomePropsType = {

}

const SIX_FAKE_ITEMS = 6

export const Home: FC<HomePropsType> = (): ReturnComponentType => {

	const dispatch = useDispatch()

	const category = useSelector(selectCategory)
	const sort = useSelector(selectSort)
	const page = useSelector(selectPage)

	const { searchValue } = useContext(SearchContext)

	const [isLoading, setIsLoading] = useState(false)
	const [pizzas, setPizzas] = useState<PizzasType[]>([])

	const fakeItems = [...new Array(SIX_FAKE_ITEMS)]
	const renderFakeItems = fakeItems.map((_, index) => <Skeleton key={index} />)
	const renderPizzas = pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza} />)

	const handlePageChange = useCallback((page: number): void => {
		dispatch(setPage(page))
	}, [])

	const scrollPageUp = (): void => window.scrollTo(0, 0)

	useEffect(() => {
		setIsLoading(true)

		PIZZAS.getPizzas(category, sort.sortProperty, sort.sortProperty, searchValue, page)
			.then((response) => {
				setPizzas(response.data)
				setIsLoading(false)
			})

		scrollPageUp()
	}, [category, sort.sortProperty, searchValue, page])

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories category={category} />
				<Sort sort={sort} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading ? renderFakeItems : renderPizzas}
			</div>
			<Pagination page={page} handlePageChange={handlePageChange} />
		</div >
	)
}
