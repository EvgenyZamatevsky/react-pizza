import { Header } from 'components/Header'
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { ReturnComponentType } from 'types'

export const Layout: FC = (): ReturnComponentType => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Outlet />
			</div>
		</div>
	)
}
