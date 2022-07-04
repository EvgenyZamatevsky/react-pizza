import { setIsLoadingAC } from './actions'

export type InitialStateType = {
	isLoading: boolean
}

export type AppReducerActionsType =
	ReturnType<typeof setIsLoadingAC>
