import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './root-reducer'
import { middlewareApi } from '../services/api'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewareApi)
})

export type rootReducer = ReturnType<typeof store.getState>
