import { createSelector } from 'reselect'

// intput selector: get the state and only returns a slice of it
const selectCart = state => state.cart

// memoir selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumalatedQuantity, cartItem) => 
        accumalatedQuantity + cartItem.quantity, 
      0
    )
)