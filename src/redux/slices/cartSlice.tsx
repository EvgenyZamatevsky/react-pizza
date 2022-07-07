import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialStateType = {
	totalPrice: 0,
	cartItems: []
}

export const cartSlice = createSlice({
	name: 'slice',
	initialState,
	reducers: {
		// addItemToCart(state, action) {
		// 	state.cartItems.push(action.payload)
		// 	state.totalPrice = state.cartItems.reduce((acc, item) => acc + item.price, 0)
		// },
		// plusCartItem(state, action) {
		// 	const cartItem = state.cartItems.find(item => item.id === action.payload)

		// 	if (cartItem) {
		// 		cartItem.count++
		// 	}
		// },
		minusCartItem(state, action: PayloadAction<string>) {
			const cartItem = state.cartItems.find(item => item.id === action.payload)

			if (cartItem) {
				cartItem.count--
			}
		},
		addItemToCart(state, action: PayloadAction<CartItemsType>) {
			const cartItem = state.cartItems.find(item => item.id === action.payload.id)

			if (cartItem) {
				cartItem.count++
			} else {
				state.cartItems.push({ ...action.payload, count: 1 })
			}

			state.totalPrice = state.cartItems.reduce((acc, item) => {
				return item.price * item.count + acc
			}, 0)
		},
		removeItemFromCart(state, action: PayloadAction<string>) {
			state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
		},
		clearCartItems(state, action: PayloadAction<[]>) {
			state.cartItems = action.payload
			state.totalPrice = 0
		},
	}
})

export const { addItemToCart, removeItemFromCart, clearCartItems, minusCartItem } = cartSlice.actions

export default cartSlice.reducer

// types
export type InitialStateType = {
	totalPrice: number
	cartItems: CartItemsType[]
}

export interface CartItemsType {
	id: string
	imageUrl: string
	price: number
	size: number
	title: string
	type: string
	count: number
} 
