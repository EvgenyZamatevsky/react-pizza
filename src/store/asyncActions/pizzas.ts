import { createAsyncThunk } from '@reduxjs/toolkit'
import { PIZZAS } from 'api/pizzas'
import { PizzaType } from 'api/pizzas/types'
import { GetPizzasParamsType } from 'store/slices/pizzas/types'

export const getPizzas = createAsyncThunk
	<PizzaType[], GetPizzasParamsType, { rejectValue: { errors: string[] } }>
	('pizzas/getPizzas', async (params, { rejectWithValue }) => {
		try {
			const { category, order, page, searchValue, sortProperty } = params

			const { data: pizzas } = await PIZZAS.getPizzas(category, sortProperty, order, searchValue, page)

			return pizzas
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})

export const getPizzaItem = createAsyncThunk
	<PizzaType, string, { rejectValue: { errors: string[] } }>
	('pizzas/getPizzaItem', async (params, { rejectWithValue }) => {
		try {
			const { data: pizzaItem } = await PIZZAS.getPizzaItem(params)

			return pizzaItem
		} catch (error: any) {
			return rejectWithValue({ errors: [error.message] })
		}
	})
