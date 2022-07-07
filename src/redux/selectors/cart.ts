import { CartItemsType } from 'redux/slices/cartSlice'
import { RootReducerType } from 'redux/store'

export const selectTotalPrice = (state: RootReducerType): number => state.cart.totalPrice

export const selectCartItems = (state: RootReducerType): CartItemsType[] => state.cart.cartItems

export const selectCartItem = (id: string) => (state: RootReducerType) => {
	return state.cart.cartItems.find(item => item.id === id)
}
