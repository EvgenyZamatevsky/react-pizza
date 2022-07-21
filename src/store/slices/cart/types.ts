export type CartSliceInitialStateType = {
	totalPrice: number
	cartItems: CartItemsType[]
}

export type CartItemsType = {
	id: string
	imageUrl: string
	price: number
	size: number
	title: string
	type: string
	count: number
} 
