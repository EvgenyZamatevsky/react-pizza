import { PizzasReducerActionsType, InitialStateType } from './types'

const initialState: InitialStateType = {
	pizzas: []
}

export const pizzasReducer = (state: InitialStateType = initialState, action: PizzasReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'pizzas/SET-PIZZAS':
			return { ...state, pizzas: action.pizzas }

		default:
			return state
	}
}
