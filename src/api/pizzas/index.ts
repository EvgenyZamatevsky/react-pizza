import { instance } from 'api/config'
import { PizzasType } from './types'

export const PIZZAS = {
	getPizzas() {
		return instance.get<PizzasType[]>('pizzas')
	}
}
