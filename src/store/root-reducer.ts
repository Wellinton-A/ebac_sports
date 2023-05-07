import { combineReducers } from '@reduxjs/toolkit'

import { cartReducer } from './cart/cart.reducer'
import { favsReducer } from './favs/favs.reducer'
import { apiReducer, apiPath } from '../services/api'

export const rootReducer = combineReducers({
  cart: cartReducer,
  favs: favsReducer,
  [apiPath]: apiReducer
})
