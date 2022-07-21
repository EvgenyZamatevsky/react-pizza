import { RootStateType } from 'store'
import { CartItemsType } from 'store/slices/cart/types'

export const selectTotalPrice = (state: RootStateType): number => state.cart.totalPrice

export const selectCartItems = (state: RootStateType): CartItemsType[] => state.cart.cartItems

export const selectCartItem = (id: string) => (state: RootStateType) => {
	return state.cart.cartItems.find(item => item.id === id)
}
