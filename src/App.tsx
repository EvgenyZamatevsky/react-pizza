import React, { FC } from 'react'
import { Header, Sort, Categories, PizzaBlock } from 'components'
import { ReturnComponentType } from 'types'
import pizzas from 'assets/pizzas.json'
import 'scss/app.scss'

export const App: FC = (): ReturnComponentType => {

  const renderPizzas = pizzas.map((pizza) => <PizzaBlock key={pizza.id} pizza={pizza} />)

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
