import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD": {
      // STEP 1: update the total amount
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;
      // STEP 2: update the items
      // STEP 3: start with the existing items inside the cart, check if there's one
      const existingItemInCartIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const exisitingItemInCart = state.items[existingItemInCartIndex];
      let updatedItems;
      // STEP 4: check if the new added item is existing in cart.
      if (exisitingItemInCart) {
        // STEP 5: if this is true then remain that item in the cart and (updeate) add the existing amount to the added amount
        const updatedItem = {
          ...exisitingItemInCart,
          quantity: exisitingItemInCart.quantity + action.item.quantity,
        };
        // STEP 6: combine the updated existing item to the items inside the cart
        updatedItems = [...state.items];
        // the amount of the existing item inside the cart now has been updated.
        updatedItems[existingItemInCartIndex] = updatedItem;
        // STEP 7: if the added item is not in the cart. Just add the item to the existing items
      } else {
        updatedItems = state.items.concat(action.item);
      }
      // STEP 8: return the updated items and amount
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "REMOVE": {
      // we can't remove items that aren't in the cart so we expect that the items we are removing are existing inside the cart
      // STEP 1: find the existing item
      const existingItemInCartIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItemInCart = state.items[existingItemInCartIndex];
      // STEP 2: update the total amount of the current state
      const updatedTotalAmount = state.totalAmount - existingItemInCart.price;
      let updatedItems;
      // STEP 3: check if the quantity of the existing item is equal to 1 then, remove that from the cart
      if (existingItemInCart.quantity === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
        // STEP 4: if the quantity of the existing item is not equal to 1 then, reduce the quantity by 1
      } else {
        const updatedItem = {
          ...existingItemInCart,
          quantity: existingItemInCart.quantity - 1,
        };
        // STEP 5: put the updated item to the updated items
        updatedItems = [...state.items];
        updatedItems[existingItemInCartIndex] = updatedItem;
      }
      // STEP 6: return the updated items and total amount
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "CLEAR": {
      return defaultCartState;
    }
    default: {
      return defaultCartState;
    }
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    reducerFunc,
    defaultCartState
  );

  const addItemHandler = (mealItem) => {
    dispatchCartAction({ type: "ADD", item: mealItem });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
