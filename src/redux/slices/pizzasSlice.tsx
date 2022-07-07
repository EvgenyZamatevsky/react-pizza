import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PIZZAS } from 'api/pizzas'
import { PizzasType } from 'api/pizzas/types'

export const getPizzas = createAsyncThunk('pizzas/getPizzas', async (params, thunkAPI) => {
	//@ts-ignore
	const { category, order, page, searchValue, sortProperty } = params

	const { data: pizzas } = await PIZZAS.getPizzas(category, sortProperty, order, searchValue, page)

	return pizzas
})

const initialState: InitialStateType = {
	pizzas: [],
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
	}
})

export const { } = pizzasSlice.actions

export default pizzasSlice.reducer

// types
type InitialStateType = {
	pizzas: PizzasType[]
	loadingStatus: string
}
