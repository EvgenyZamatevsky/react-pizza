export type PizzasType = {
	category: number
	id: number
	imageUrl: string
	price: number
	rating: number
	sizes: PizzaSizes[]
	title: string
	types: PizzaTypes[]
}

export enum PizzaSizes {
	smallPizza = 26,
	mediumPizza = 30,
	bigPizza = 40
}

export enum PizzaTypes {
	thinDough = 0,
	traditionalDough = 1,
}
