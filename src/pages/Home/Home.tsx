import React, { FC, useEffect, useState } from 'react'
import { PizzaBlock, Categories, Sort, Skeleton } from 'components'
import { useTypedDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectIsLoading } from 'store/appReducer/selectors'
import { selectPizzas } from 'store/pizzasReducer/selectors'
import { getPizzasTC } from 'store/pizzasReducer/thunks'
import { ReturnComponentType } from 'types'

export type HomePropsType = {

}

const SIX_FAKE_ITEMS = 6

export const Home: FC<HomePropsType> = (): ReturnComponentType => {

	const dispatch = useTypedDispatch()
	const pizzas = useSelector(selectPizzas)
	const isLoading = useSelector(selectIsLoading)
	const [currentCategory, setCurrentCategory] = useState(0)
	const [pizzaSorting, setPizzaSorting] = useState({ name: 'популярности', sortProperty: 'rating' })

	const fakeItems = [...new Array(SIX_FAKE_ITEMS)]
	const renderFakeItems = fakeItems.map((_, index) => <Skeleton key={index} />)
	const renderPizzas = pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza} />)

	const handleSelectCurrentCategoryClick = (index: number): void => {
		setCurrentCategory(index)
	}

	const handleSelectPizzaSortingClick = (pizzaSortingValues: { name: string, sortProperty: string }): void => {
		setPizzaSorting(pizzaSortingValues)
	}

	const scrollPageUp = (): void => window.scrollTo(0, 0)

	useEffect(() => {
		dispatch(getPizzasTC(currentCategory, pizzaSorting.sortProperty, pizzaSorting.sortProperty))
		scrollPageUp()
	}, [currentCategory, pizzaSorting.sortProperty])

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories currentCategory={currentCategory} handleSelectCurrentCategoryClick={handleSelectCurrentCategoryClick} />
				<Sort pizzaSorting={pizzaSorting} handleSelectPizzaSortingClick={handleSelectPizzaSortingClick} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading ? renderFakeItems : renderPizzas}
			</div>
		</div >
	)
}
