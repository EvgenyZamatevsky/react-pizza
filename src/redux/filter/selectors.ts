import { RootStateType } from 'redux/store'
import { SortType } from './slice'

export const selectCategory = (state: RootStateType): number => state.filter.category

export const selectSort = (state: RootStateType): SortType => state.filter.sort

export const selectPage = (state: RootStateType): number => state.filter.page

export const selectSearchValue = (state: RootStateType): string => state.filter.searchValue
