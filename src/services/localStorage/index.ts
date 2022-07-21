import { LocalStorageKey } from 'enums'
import { CartItemsType } from 'store/slices/cart/types'
import { calcTotalPrice } from 'utils'

export const setDataToLocalStorage = (localStorageName: string, stringData: string): void => {
	localStorage.setItem(localStorageName, stringData)
}

export const getCartFromLocalStorage = () => {
	const data = localStorage.getItem(LocalStorageKey.DATA)
	const cartItems = data ? JSON.parse(data) : []
	const totalPrice = calcTotalPrice(cartItems)

	return { cartItems: cartItems as CartItemsType[], totalPrice }
}
