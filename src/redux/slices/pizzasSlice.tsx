import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PIZZAS } from 'api/pizzas'
import { PizzasType } from 'api/pizzas/types'

export const getPizzas = createAsyncThunk('pizzas/getPizzas', async (params, thunkAPI) => {
	//@ts-ignore
	const { category, order, page, searchValue, sortProperty } = params

	const { data: pizzas } = await PIZZAS.getPizzas(category, sortProperty, order, searchValue, page)

	return pizzas
})

export const getPizzaItem = createAsyncThunk('pizzas/getPizzaItem', async (params) => {
	try {
		//@ts-ignore
		const { data: pizzaItem } = await PIZZAS.getPizzaItem(params)

		return pizzaItem
	} catch (error: any) {
		alert(error.message)
	}
})

const initialState: InitialStateType = {
	pizzas: [],
	pizzaItem: {} as PizzasType,
	loadingStatus: 'loading'
}

const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		// setPizzas(state, action) {
		// 	state.pizzas = action.payload
		// }
	},
	extraReducers: {
		//@ts-ignore
		[getPizzas.pending]: (state) => {
			state.loadingStatus = 'loading'
			state.pizzas = []
		},
		//@ts-ignore
		[getPizzas.fulfilled]: (state, action) => {
			state.pizzas = action.payload
			state.loadingStatus = 'success'
		},
		//@ts-ignore
		[getPizzas.rejected]: (state) => {
			state.loadingStatus = 'error'
			state.pizzas = []
		},
		//@ts-ignore
		[getPizzaItem.fulfilled]: (state, action) => {
			state.pizzaItem = action.payload
		}
	}
})

export const { } = pizzasSlice.actions

export default pizzasSlice.reducer

// types
type InitialStateType = {
	pizzas: PizzasType[]
	loadingStatus: string
	pizzaItem: PizzasType
}
