import { PizzasType } from 'api/pizzas/types'
import { setPizzasAC } from './actions'

export type InitialStateType = {
	pizzas: PizzasType[]
}

export type PizzasReducerActionsType =
	ReturnType<typeof setPizzasAC>
