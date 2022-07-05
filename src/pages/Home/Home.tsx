import React, { FC, memo, useContext, useEffect, useState } from 'react'
import { PizzaBlock, Categories, Sort, Skeleton, Pagination } from 'components'
import { useTypedDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectIsLoading } from 'store/appReducer/selectors'
import { selectPizzas } from 'store/pizzasReducer/selectors'
import { getPizzasTC } from 'store/pizzasReducer/thunks'
import { ReturnComponentType } from 'types'
import { useCallback } from 'react'
import { SearchContext } from 'context'

export type HomePropsType = {

}

const SIX_FAKE_ITEMS = 6

export const Home: FC<HomePropsType> = (): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const { searchValue } = useContext(SearchContext)

	const pizzas = useSelector(selectPizzas)
	const isLoading = useSelector(selectIsLoading)

	const [pizzaCategory, setPizzaCategory] = useState(0)
	const [pizzaSorting, setPizzaSorting] = useState({ name: 'популярности', sortProperty: 'rating' })
	const [currentPage, setCurrentPage] = useState(1)

	const fakeItems = [...new Array(SIX_FAKE_ITEMS)]
	const renderFakeItems = fakeItems.map((_, index) => <Skeleton key={index} />)
	const renderPizzas = pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza} />)

	const handleSelectPizzaCategoryClick = useCallback((index: number): void => {
		setPizzaCategory(index)
	}, [])

	const handleSelectPizzaSortingClick = useCallback((pizzaSortingValues: { name: string, sortProperty: string }): void => {
		setPizzaSorting(pizzaSortingValues)
	}, [])

	const handlePageChange = useCallback((page: number): void => {
		setCurrentPage(page)
	}, [])

	const scrollPageUp = (): void => window.scrollTo(0, 0)

	useEffect(() => {
		dispatch(getPizzasTC(pizzaCategory, pizzaSorting.sortProperty, pizzaSorting.sortProperty, searchValue, currentPage))
		scrollPageUp()
	}, [pizzaCategory, pizzaSorting.sortProperty, searchValue, currentPage])

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories pizzaCategory={pizzaCategory} handleSelectPizzaCategoryClick={handleSelectPizzaCategoryClick} />
				<Sort pizzaSorting={pizzaSorting} handleSelectPizzaSortingClick={handleSelectPizzaSortingClick} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading ? renderFakeItems : renderPizzas}
			</div>
			<Pagination currentPage={currentPage} handlePageChange={handlePageChange} />
		</div >
	)
}
