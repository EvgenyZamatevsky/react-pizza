import React, { FC, lazy, Suspense } from 'react'
import { Layout } from 'components'
import { ReturnComponentType } from 'types'
import { Route, Routes } from 'react-router-dom'
import { Path } from 'enums'
import { Home } from 'pages/Home/Home'
import 'scss/app.scss'

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ 'pages/Cart')
  .then(module => ({ default: module.Cart })))

const Pizza = lazy(() => import(/* webpackChunkName: "Pizza" */'pages/Pizza')
  .then(module => ({ default: module.Pizza })))

const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */'pages/NotFound')
  .then(module => ({ default: module.NotFound })))

export const App: FC = (): ReturnComponentType => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes >
        <Route path={Path.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={Path.CART} element={<Cart />} />
          <Route path={Path.NOT_FOUND} element={<NotFound />} />
          <Route path={Path.PIZZA} element={<Pizza />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
