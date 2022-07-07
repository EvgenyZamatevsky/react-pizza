import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum SortPropertyEnum {
	RATING_DESC = 'rating',
	PRICE_DESC = 'price',
	TITLE_DESC = 'title',
	RATING_ASC = '-rating',
	PRICE_ASC = '-price',
	TITLE_ASC = '-title',
}

const initialState: InitialStateType = {
	searchValue: '',
	category: 0,
	sort: { name: 'популярности', sortProperty: SortPropertyEnum.RATING_DESC },
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

// types
export type InitialStateType = {
	searchValue: string
	category: number
	sort: SortType,
	page: number
}

export type SortType = {
	name: string
	sortProperty: SortPropertyEnum
}
