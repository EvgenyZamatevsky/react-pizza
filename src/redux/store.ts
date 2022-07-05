import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {}
})
console.log(store)
// types
// export type RootReducerType = ReturnType<typeof rootReducer>
// export type AppActionsType = Parameters<typeof rootReducer>[1]
// export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootReducerType, unknown, AppActionsType>
// export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
