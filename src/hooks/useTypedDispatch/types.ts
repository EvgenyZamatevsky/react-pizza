import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootStateType } from 'redux/store'

export type DispatchType = ThunkDispatch<RootStateType, unknown, AnyAction>
