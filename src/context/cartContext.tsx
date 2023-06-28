import { createContext, useEffect, useState } from "react";
import { Coffees } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffees {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeesToCart: (coffee: CartItem) => void;
  changeItemQuantityInCart: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartitems: (CartItemId: number) => void;
  clearCart: () => void;
}

interface CartContextProviderProps {
  children: React.ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "CoffeeDelivery:cartitems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeesToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      //verifica se o café já existe no carrinho e se tiver ele adiciona mais um
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeItemQuantityInCart(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });
    event?.preventDefault();
    setCartItems(newCart);
  }

  function removeCartitems(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  function clearCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeesToCart,
        cartQuantity,
        cartItemsTotal,
        changeItemQuantityInCart,
        removeCartitems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
