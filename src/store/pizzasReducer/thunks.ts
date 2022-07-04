import { PIZZAS } from 'api/pizzas'
import { ThunkType } from 'store/store'
import { setPizzasAC } from './actions'

export const getPizzasTC = (): ThunkType => async (dispatch) => {
	try {
		const { data: pizzas } = await PIZZAS.getPizzas()

		dispatch(setPizzasAC(pizzas))
	} catch (error: any) {
		alert(error.message ? error.message : 'Some error occurred')
	}
}
