import { PIZZAS } from 'api/pizzas'
import { setIsLoadingAC } from 'store/appReducer/actions'
import { ThunkType } from 'store/store'
import { setPizzasAC } from './actions'

export const getPizzasTC = (category: number, sortBy: string, order: string, search: string, page: number): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))

		const { data: pizzas } = await PIZZAS.getPizzas(category, sortBy, order, search, page)

		dispatch(setPizzasAC(pizzas))
	} catch (error: any) {
		alert(error.message ? error.message : 'Some error occurred')
	} finally {
		dispatch(setIsLoadingAC(false))
	}
}
