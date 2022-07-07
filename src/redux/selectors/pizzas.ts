import { PizzasType } from 'api/pizzas/types'
import { RootStateType } from 'redux/store'

export const selectPizzas = (state: RootStateType): PizzasType[] => state.pizzas.pizzas

export const selectPizzaItem = (state: RootStateType): PizzasType => state.pizzas.pizzaItem

export const selectLoadingStatus = (state: RootStateType): string => state.pizzas.loadingStatus
