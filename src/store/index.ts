import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filter'
import cartSlice from './slices/cart'
import pizzasSlice from './slices/pizzas'

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		cart: cartSlice,
		pizzas: pizzasSlice
	}
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch 