import { PizzasType } from 'api/pizzas/types'
import { RootReducerType } from 'store/store'

export const selectPizzas = (state: RootReducerType): PizzasType[] => state.pizzas.pizzas
