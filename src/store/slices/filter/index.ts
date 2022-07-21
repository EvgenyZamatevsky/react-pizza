import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EMPTY_STRING } from 'constants/base'
import { SortProperty } from 'enums'
import { FilterSliceInitialStateType, SortType } from './types'

const initialState: FilterSliceInitialStateType = {
	searchValue: EMPTY_STRING,
	category: 0,
	sort: { name: 'популярности', sortProperty: SortProperty.RATING_DESC },
	page: 1
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		},
		setCategory(state, action: PayloadAction<number>) {
			state.category = action.payload
		},
		setSort(state, action: PayloadAction<SortType>) {
			state.sort = action.payload
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload
		},
	},
})

export const { setSearchValue, setCategory, setSort, setPage } = filterSlice.actions

export default filterSlice.reducer
