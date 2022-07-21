import { PizzaType } from 'api/pizzas/types'
import { RootStateType } from 'store'

export const selectPizzas = (state: RootStateType): PizzaType[] => state.pizzas.pizzas

export const selectPizzaItem = (state: RootStateType): PizzaType => state.pizzas.pizzaItem

export const selectLoadingStatus = (state: RootStateType): string => state.pizzas.loadingStatus
