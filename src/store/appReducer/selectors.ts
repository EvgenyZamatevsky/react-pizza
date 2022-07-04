import { RootReducerType } from 'store/store'

export const selectIsLoading = (state: RootReducerType): boolean => state.app.isLoading
