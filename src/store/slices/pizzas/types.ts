import { PizzaType } from "api/pizzas/types"
import { LoadingStatus } from "enums"

export type PizzasSliceInitialStateType = {
	pizzas: PizzaType[]
	loadingStatus: LoadingStatus
	pizzaItem: PizzaType
}

export type GetPizzasParamsType = {
	category: number
	order: string
	page: number
	searchValue: string
	sortProperty: string
}
