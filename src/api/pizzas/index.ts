import { instance } from 'api/config'
import { PizzasType } from './types'

export const PIZZAS = {
	getPizzas(category: number, sortBy: string, order: string, search: string, page: number) {

		const currentCategory = category > 0 ? `&category=${category}` : ''
		const currentSortBy = sortBy.replace('-', '')
		const currentOrder = order.includes('-') ? 'asc' : 'desc'
		const currentSearch = search ? `&search=${search.toLowerCase()}` : ''

		return instance.get<PizzasType[]>(`pizzas?page=${page}&limit=4${currentCategory}&sortBy=${currentSortBy}&order=${currentOrder}${currentSearch}`)
	},
	getPizzaItem(pizzaId: string) {
		return instance.get(`pizzas/${pizzaId}`)
	}
}
