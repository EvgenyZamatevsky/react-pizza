import { instance } from 'api/config'
import { EMPTY_STRING } from 'constants/base'
import { PizzaType } from './types'

export const PIZZAS = {
	getPizzas(category: number, sortBy: string, order: string, search: string, page: number) {

		const currentCategory = category > 0 ? `&category=${category}` : EMPTY_STRING
		const currentSortBy = sortBy.replace('-', EMPTY_STRING)
		const currentOrder = order.includes('-') ? 'asc' : 'desc'
		const currentSearch = search ? `&search=${search.toLowerCase()}` : EMPTY_STRING

		return instance.get<PizzaType[]>(`pizzas?page=${page}&limit=4${currentCategory}&sortBy=${currentSortBy}&order=${currentOrder}${currentSearch}`)
	},
	getPizzaItem(pizzaId: string) {
		return instance.get<PizzaType>(`pizzas/${pizzaId}`)
	}
}
