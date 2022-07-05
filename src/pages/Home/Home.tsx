import React, { FC, useContext, useEffect, useState } from 'react'
import { PizzaBlock, Categories, Sort, Skeleton, Pagination } from 'components'
import { ReturnComponentType } from 'types'
import { useCallback } from 'react'
import { SearchContext } from 'context'
import { PizzasType } from 'api/pizzas/types'
import { PIZZAS } from 'api/pizzas'

export type HomePropsType = {

}

const SIX_FAKE_ITEMS = 6

export const Home: FC<HomePropsType> = (): ReturnComponentType => {

	const { searchValue } = useContext(SearchContext)

	const [isLoading, setIsLoading] = useState(false)
	const [pizzas, setPizzas] = useState<PizzasType[]>([])
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
		setIsLoading(true)

		PIZZAS.getPizzas(pizzaCategory, pizzaSorting.sortProperty, pizzaSorting.sortProperty, searchValue, currentPage)
			.then((response) => {
				setPizzas(response.data)
				setIsLoading(false)
			})

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
