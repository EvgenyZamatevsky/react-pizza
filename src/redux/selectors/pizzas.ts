import { PizzasType } from 'api/pizzas/types'
import { RootReducerType } from 'redux/store'

export const selectPizzas = (state: RootReducerType): PizzasType[] => state.pizzas.pizzas

export const selectPizzaItem = (state: RootReducerType): PizzasType => state.pizzas.pizzaItem

export const selectLoadingStatus = (state: RootReducerType): string => state.pizzas.loadingStatus
