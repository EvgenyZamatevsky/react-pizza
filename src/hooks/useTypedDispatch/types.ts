import { ThunkDispatch } from '@reduxjs/toolkit'
import { AppActionsType, RootReducerType } from 'redux/store'

export type DispatchType = ThunkDispatch<RootReducerType, unknown, AppActionsType>
