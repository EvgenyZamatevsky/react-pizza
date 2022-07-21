import { RootStateType } from 'store'
import { SortType } from 'store/slices/filter/types'

export const selectCategory = (state: RootStateType): number => state.filter.category

export const selectSort = (state: RootStateType): SortType => state.filter.sort

export const selectPage = (state: RootStateType): number => state.filter.page

export const selectSearchValue = (state: RootStateType): string => state.filter.searchValue
