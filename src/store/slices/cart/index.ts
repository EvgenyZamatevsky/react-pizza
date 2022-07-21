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
		plusCartItem(state, action) {
			const cartItem = state.cartItems.find(item => item.id === action.payload)

			if (cartItem) {
				cartItem.count++
			}

			state.totalPrice = calcTotalPrice(state.cartItems)
		},
		minusCartItem(state, action: PayloadAction<string>) {
			const cartItem = state.cartItems.find(item => item.id === action.payload)

			if (cartItem) {
				cartItem.count--
			}

			state.totalPrice = calcTotalPrice(state.cartItems)
		},
		clearCartItems(state) {
			state.cartItems = []
			state.totalPrice = 0
		},
	}
})

export const { addItemToCart, removeItemFromCart, clearCartItems, minusCartItem, plusCartItem } = cartSlice.actions

export default cartSlice.reducer
