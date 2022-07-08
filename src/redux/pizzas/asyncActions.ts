import { createAsyncThunk } from '@reduxjs/toolkit'
import { PIZZAS } from 'api/pizzas'
import { PizzasType } from 'api/pizzas/types'
import { GetPizzasParamsType } from './slice'

export const getPizzas = createAsyncThunk<PizzasType[], GetPizzasParamsType>('pizzas/getPizzas', async (params) => {
	const { category, order, page, searchValue, sortProperty } = params

	const { data: pizzas } = await PIZZAS.getPizzas(category, sortProperty, order, searchValue, page)

	return pizzas
})

export const getPizzaItem = createAsyncThunk<PizzasType | undefined, string>('pizzas/getPizzaItem', async (params) => {
	try {
		const { data: pizzaItem } = await PIZZAS.getPizzaItem(params)

		return pizzaItem
	} catch (error: any) {
		alert(error.message)
	}
})
