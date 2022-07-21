import { SortProperty } from 'enums'

export type FilterSliceInitialStateType = {
	searchValue: string
	category: number
	sort: SortType,
	page: number
}

export type SortType = {
	name: string
	sortProperty: SortProperty
}

