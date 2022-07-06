import { createSlice } from '@reduxjs/toolkit'

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
		addItemToCart(state, action) {
			const cartItem = state.cartItems.find(item => item.id === action.payload.id)

			if (cartItem) {
				cartItem.count++
			} else {
				state.cartItems.push({ ...action.payload, count: 1 })
			}

			state.totalPrice = state.cartItems.reduce((acc, item) => acc + (item.price * item.count), 0)
		},
		removeItemFromCart(state, action) {
			state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
		},
		clearCartItems(state, action) {
			state.cartItems = []
		},
	}
})

export const { addItemToCart, removeItemFromCart, clearCartItems } = cartSlice.actions

export default cartSlice.reducer

// types
export type InitialStateType = {
	totalPrice: number
	cartItems: CartItemsType[]
}

export type CartItemsType = {
	id: number
	imageUrl: string
	price: number
	size: number
	title: string
	type: number
	count: number
} 
