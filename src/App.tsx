import React, { FC, lazy, Suspense } from 'react'
import { Layout } from 'components'
import { ReturnComponentType } from 'types'
import { Route, Routes } from 'react-router-dom'
import { Path } from 'enums'
import { Home } from 'pages/Home'
import 'scss/app.scss'

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ 'pages/Cart'))
const FullPizza = lazy(() => import(/* webpackChunkName: "FullPizza" */'pages/FullPizza'))
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */'pages/NotFound'))

export const App: FC = (): ReturnComponentType => {
  return (
    <Routes >
      <Route path={Path.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={Path.cart} element={
          <Suspense fallback={<div>Идет загрузка корзины...</div>}>
            <Cart />
          </Suspense>
        } />
        <Route path={Path.notFound} element={<Suspense fallback={<div>Идет загрузка...</div>}>
          <NotFound />
        </Suspense>
        } />
        <Route path={Path.fullPizza} element={<Suspense fallback={<div>Идет загрузка...</div>}>
          <FullPizza />
        </Suspense>
        } />
      </Route>
    </Routes>
  )
}
