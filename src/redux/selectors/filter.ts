import { SortType } from 'redux/slices/filterSlice'
import { RootReducerType } from 'redux/store'

export const selectCategory = (state: RootReducerType): number => state.filter.category

export const selectSort = (state: RootReducerType): SortType => state.filter.sort

export const selectPage = (state: RootReducerType): number => state.filter.page
