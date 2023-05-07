import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavState = {
  favs: Produto[]
}

const INITIAL_STATE: FavState = {
  favs: []
}

export const favsSlice = createSlice({
  name: 'favs',
  initialState: INITIAL_STATE,
  reducers: {
    setFavs(state, actions: PayloadAction<Produto>) {
      const product = actions.payload

      if (state.favs.some((item) => item.id === product.id)) {
        state.favs = state.favs.filter((item) => item.id !== actions.payload.id)
      } else {
        state.favs.push(product)
      }
    }
  }
})

export const { setFavs } = favsSlice.actions
export const favsReducer = favsSlice.reducer
