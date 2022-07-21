import { createSlice } from '@reduxjs/toolkit'
import { PizzaType } from 'api/pizzas/types'
import { LoadingStatus } from 'enums'
import { getPizzas, getPizzaItem } from 'store/asyncActions'
import { PizzasSliceInitialStateType } from './types'

const initialState: PizzasSliceInitialStateType = {
	pizzas: [],
	pizzaItem: {} as PizzaType,
	loadingStatus: LoadingStatus.LOADING
}

const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getPizzas.pending, (state) => {
				state.loadingStatus = LoadingStatus.LOADING
				state.pizzas = []
			})
			.addCase(getPizzas.fulfilled, (state, action) => {
				state.pizzas = action.payload
				state.loadingStatus = LoadingStatus.SUCCESS
			})
			.addCase(getPizzas.rejected, (state) => {
				state.loadingStatus = LoadingStatus.ERROR
				state.pizzas = []
			})
			.addCase(getPizzaItem.fulfilled, (state, action) => {
				state.pizzaItem = action.payload
			})
	},
})

export default pizzasSlice.reducer
