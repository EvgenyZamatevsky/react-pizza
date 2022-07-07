import React, { FC } from 'react'
import { Layout } from 'components'
import { ReturnComponentType } from 'types'
import { Cart, FullPizza, Home, NotFound } from 'pages'
import { Route, Routes } from 'react-router-dom'
import { Path } from 'enums'
import 'scss/app.scss'

export const App: FC = (): ReturnComponentType => {
  return (
    <Routes >
      <Route path={Path.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={Path.cart} element={<Cart />} />
        <Route path={Path.notFound} element={<NotFound />} />
        <Route path={Path.fullPizza} element={<FullPizza />} />
      </Route>
    </Routes>
  )
}
