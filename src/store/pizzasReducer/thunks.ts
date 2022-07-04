import { PIZZAS } from 'api/pizzas'
import { setIsLoadingAC } from 'store/appReducer/actions'
import { ThunkType } from 'store/store'
import { setPizzasAC } from './actions'

export const getPizzasTC = (): ThunkType => async (dispatch) => {
	try {
		dispatch(setIsLoadingAC(true))

		const { data: pizzas } = await PIZZAS.getPizzas()

		dispatch(setPizzasAC(pizzas))
	} catch (error: any) {
		alert(error.message ? error.message : 'Some error occurred')
	} finally {
		dispatch(setIsLoadingAC(false))
	}
}
