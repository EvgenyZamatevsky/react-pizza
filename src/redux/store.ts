import { combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import filterSlice from './slices/filterSlice'
import pizzasSlice from './slices/pizzasSlice'


export const rootReducer = combineReducers({
	filter: filterSlice,
	cart: cartSlice,
	pizzas: pizzasSlice
})

export const store = configureStore({
	reducer: rootReducer
})

// types
export type RootReducerType = ReturnType<typeof rootReducer>
export type AppActionsType = Parameters<typeof rootReducer>[1]
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootReducerType, unknown, AppActionsType>
// export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
