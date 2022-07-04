import { PizzasType } from 'api/pizzas/types'

export const setPizzasAC = (pizzas: PizzasType[]) => ({ type: 'pizzas/SET-PIZZAS', pizzas } as const)
