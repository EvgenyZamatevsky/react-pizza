import { createSlice } from '@reduxjs/toolkit'

const initialState: FilterSliceType = {
	category: 0,
	sort: { name: 'популярности', sortProperty: 'rating' }
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategory(state, action) {
			state.category = action.payload
		},
		setSort(state, action) {
			console.log(action)
			state.sort = action.payload
		},
	},
})

export const { setCategory, setSort } = filterSlice.actions

export default filterSlice.reducer

// types
export type FilterSliceType = {
	category: number
	sort: SortType
}

export type SortType = {
	name: string
	sortProperty: string
}
