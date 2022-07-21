import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartFromLocalStorage } from 'services/localStorage'
import { calcTotalPrice } from 'utils/calcTotalPrice'
import { CartItemsType, CartSliceInitialStateType } from './types'

const { cartItems, totalPrice } = getCartFromLocalStorage()

const initialState: CartSliceInitialStateType = {
	totalPrice: totalPrice,
	cartItems: cartItems
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

			state.totalPrice = calcTotalPrice(state.cartItems);
		},
		addItemToCart(state, action: PayloadAction<CartItemsType>) {
			const cartItem = state.cartItems.find(item => item.id === action.payload.id)

			if (cartItem) {
				cartItem.count++
			} else {
				state.cartItems.push({ ...action.payload, count: 1 })
			}

			state.totalPrice = calcTotalPrice(state.cartItems)
		},
		removeItemFromCart(state, action: PayloadAction<string>) {
			state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
			state.totalPrice = calcTotalPrice(state.cartItems)
		},
		clearCartItems(state) {
			state.cartItems = []
			state.totalPrice = 0
		},
	}
})

export const { addItemToCart, removeItemFromCart, clearCartItems, minusCartItem } = cartSlice.actions

export default cartSlice.reducer
