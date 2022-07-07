import { createSlice } from '@reduxjs/toolkit'

const initialState: InitialStateType = {
	searchValue: '',
	category: 0,
	sort: { name: 'популярности', sortProperty: 'rating' },
	page: 1
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setCategory(state, action) {
			state.category = action.payload
		},
		setSort(state, action) {
			state.sort = action.payload
		},
		setPage(state, action) {
			state.page = action.payload
		},
	},
})

export const { setSearchValue, setCategory, setSort, setPage } = filterSlice.actions

export default filterSlice.reducer

// types
export type InitialStateType = {
	searchValue: string
	category: number
	sort: SortType,
	page: number
}

export type SortType = {
	name: string
	sortProperty: string
}
