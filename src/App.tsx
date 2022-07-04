import React, { FC } from 'react'
import { Header, Sort, Categories, PizzaBlock } from 'components'
import { ReturnComponentType } from 'types'
import 'scss/app.scss'

export const App: FC = (): ReturnComponentType => {
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
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  )
}
