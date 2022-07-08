import { CartItemsType } from 'redux/cart/slice'
import { calcTotalPrice } from './calcTotalPrice'

export const getCartFromLocalStorage = () => {
	const data = localStorage.getItem('cart')
	const cartItems = data ? JSON.parse(data) : []
	const totalPrice = calcTotalPrice(cartItems)

	return { cartItems: cartItems as CartItemsType[], totalPrice }
}
