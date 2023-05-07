import { combineReducers } from '@reduxjs/toolkit'

import { cartReducer } from './cart/cart.reducer'
import { favsReducer } from './favs/favs.reducer'

export const rootReducer = combineReducers({
  cart: cartReducer,
  favs: favsReducer
})
