import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filter/slice'
import cartSlice from './cart/slice'
import pizzasSlice from './pizzas/slice'

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		cart: cartSlice,
		pizzas: pizzasSlice
	}
})

export type RootStateType = ReturnType<typeof store.getState>
