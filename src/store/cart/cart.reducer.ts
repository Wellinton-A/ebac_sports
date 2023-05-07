import { createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

const INITIAL_STATE = {
  cartList: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    setCartList(state, actions) {
      state.cartList = actions.payload
    }
  }
})

export const { setCartList } = cartSlice.actions
export const cartReducer = cartSlice.reducer

export const addProductToCart = (cart: Produto[], product: Produto) => {
  const isInCart = cart.some(
    (productCart: Produto) => productCart.id === product.id
  )
  if (!isInCart) {
    return setCartList([...cart, { ...product, quantity: 1 }])
  }
  const newCartList = cart.map((productCart: Produto) => {
    if (productCart.id === product.id) {
      return { ...productCart, quantity: productCart.quantity + 1 }
    }
    return productCart
  })
  return setCartList(newCartList)
}
