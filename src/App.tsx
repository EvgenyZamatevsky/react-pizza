import React, { FC } from 'react'
import { Header } from 'components'
import { ReturnComponentType } from 'types'
import { Cart, Home, NotFound } from 'pages'
import { Route, Routes } from 'react-router-dom'
import { Path } from 'enums'
import { useState } from 'react'
import { EMPTY_STRING } from 'constants/base'
import 'scss/app.scss'

export const App: FC = (): ReturnComponentType => {

  const [searchValue, setSearchValue] = useState(EMPTY_STRING)

  return (
    <div className='wrapper'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='content'>
        <Routes >
          <Route path={Path.home} element={<Home searchValue={searchValue} />} />
          <Route path={Path.cart} element={<Cart />} />
          <Route path={Path.notFound} element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
