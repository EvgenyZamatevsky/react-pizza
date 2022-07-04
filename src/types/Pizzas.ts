import { PizzaSizes, PizzaTypes } from 'enums'

export type pizzasType = {
	category: number
	id: number
	imageUrl: string
	price: number
	rating: number
	sizes: PizzaSizes[]
	title: string
	types: PizzaTypes[]
}

// export type PizzaSizes = Array<26 | 30 | 40>
// export type PizzaTypes  = Array<0 | 1>
