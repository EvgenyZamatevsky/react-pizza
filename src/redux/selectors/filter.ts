import { SortType } from 'redux/slices/filterSlice'
import { RootStateType } from 'redux/store'

export const selectCategory = (state: RootStateType): number => state.filter.category

export const selectSort = (state: RootStateType): SortType => state.filter.sort

export const selectPage = (state: RootStateType): number => state.filter.page

export const selectSearchValue = (state: RootStateType): string => state.filter.searchValue
