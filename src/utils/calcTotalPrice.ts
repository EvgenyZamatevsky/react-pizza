import { CartItemsType } from "redux/cart/slice"

export const calcTotalPrice = (cartItems: CartItemsType[]) => {
	return cartItems.reduce((acc, item) => {
		return item.price * item.count + acc
	}, 0)
}
