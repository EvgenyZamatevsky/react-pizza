import { createSlice } from '@reduxjs/toolkit'

const initialState: FilterSliceType = {
	category: 0,
	sort: { name: 'популярности', sortProperty: 'rating' },
	page: 1
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
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

export const { setCategory, setSort, setPage } = filterSlice.actions

export default filterSlice.reducer

// types
export type FilterSliceType = {
	category: number
	sort: SortType,
	page: number
}

export type SortType = {
	name: string
	sortProperty: string
}
