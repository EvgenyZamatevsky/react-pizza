import React, { FC, useEffect } from 'react'
import { Header, Sort, Categories, PizzaBlock } from 'components'
import { ReturnComponentType } from 'types'
import { useTypedDispatch } from 'hooks'
import { getPizzasTC } from 'store/pizzasReducer/thunks'
import { useSelector } from 'react-redux'
import { selectPizzas } from 'store/pizzasReducer/selectors'
import 'scss/app.scss'

export const App: FC = (): ReturnComponentType => {

  const dispatch = useTypedDispatch()
  const pizzas = useSelector(selectPizzas)

  const renderPizzas = pizzas.map(pizza => {
    return <PizzaBlock key={pizza.id} pizza={pizza} />
  })

  useEffect(() => {
    dispatch(getPizzasTC())
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {renderPizzas}
          </div>
        </div>
      </div>
    </div>
  )
}
