import { combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import filterSlice from './filter/slice'
import cartSlice from './cart/slice'
import pizzasSlice from './pizzas/slice'
//import thunkMiddleware from 'redux-thunk'

export const rootReducer = combineReducers({
	filter: filterSlice,
	cart: cartSlice,
	pizzas: pizzasSlice
})

export const store = configureStore({
	reducer: rootReducer,
	//middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

// types
export type RootStateType = ReturnType<typeof store.getState>

//export type RootReducerType = ReturnType<typeof rootReducer>
//export type AppActionsType = Parameters<typeof rootReducer>[1]
//export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsType>
// export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
