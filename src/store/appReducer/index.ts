import { AppReducerActionsType, InitialStateType } from './types'

const initialState: InitialStateType = {
	isLoading: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'app/SET-IS-LOADING':
			return { ...state, isLoading: action.isLoading }

		default:
			return state
	}
}
