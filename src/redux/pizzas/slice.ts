import { createSlice } from '@reduxjs/toolkit'
import { PizzasType } from 'api/pizzas/types'
import { getPizzas, getPizzaItem } from './asyncActions'

export enum LoadingStatusEnum {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

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
