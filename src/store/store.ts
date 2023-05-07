import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './root-reducer'

export const store = configureStore({
  reducer: rootReducer
})

export type rootReducer = ReturnType<typeof store.getState>
