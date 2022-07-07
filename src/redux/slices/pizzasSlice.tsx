import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PIZZAS } from 'api/pizzas'
import { PizzasType } from 'api/pizzas/types'

export enum LoadingStatusEnum {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

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

const initialState: InitialStateType = {
	pizzas: [],
	pizzaItem: {} as PizzasType,
	loadingStatus: LoadingStatusEnum.LOADING
}

const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		// setPizzas(state, action) {
		// 	state.pizzas = action.payload
		// }
	},
	extraReducers(builder) {
		builder
			.addCase(getPizzas.pending, (state) => {
				state.loadingStatus = LoadingStatusEnum.LOADING
				state.pizzas = []
			})
			.addCase(getPizzas.fulfilled, (state, action) => {
				state.pizzas = action.payload
				state.loadingStatus = LoadingStatusEnum.SUCCESS
			})
			.addCase(getPizzas.rejected, (state) => {
				state.loadingStatus = LoadingStatusEnum.ERROR
				state.pizzas = []
			})
			.addCase(getPizzaItem.fulfilled, (state, action) => {
				state.pizzaItem = action.payload as PizzasType
			})
	},
})

export const { } = pizzasSlice.actions

export default pizzasSlice.reducer

// types
interface InitialStateType {
	pizzas: PizzasType[]
	loadingStatus: LoadingStatusEnum
	pizzaItem: PizzasType
}

export type GetPizzasParamsType = {
	category: number
	order: string
	page: number
	searchValue: string
	sortProperty: string
}
