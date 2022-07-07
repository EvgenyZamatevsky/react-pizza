import React, { FC } from 'react'
import { Header } from 'components'
import { ReturnComponentType } from 'types'
import { Cart, FullPizza, Home, NotFound } from 'pages'
import { Route, Routes } from 'react-router-dom'
import { Path } from 'enums'
import 'scss/app.scss'

export const App: FC = (): ReturnComponentType => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes >
          <Route path={Path.home} element={<Home />} />
          <Route path={Path.cart} element={<Cart />} />
          <Route path={Path.notFound} element={<NotFound />} />
          <Route path={Path.fullPizza} element={<FullPizza />} />
        </Routes>
      </div>
    </div>
  )
}
