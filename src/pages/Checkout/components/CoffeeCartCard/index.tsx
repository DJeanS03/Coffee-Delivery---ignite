import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "@phosphor-icons/react";
import { CartItem } from "../../../../context/cartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../Hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeItemQuantityInCart, removeCartitems } = useCart();
  
  function handleIncrease() {
    changeItemQuantityInCart(coffee.id, "increase");
  }
  function handleDecrease() {
    changeItemQuantityInCart(coffee.id, "decrease");
  }
  function handleRemove() {
    removeCartitems(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div className="coffeCard__container">
        <img className="coffeCard__img" src={`/myCoffees/${coffee.photo}`} />
        <div>
          <p className="coffeCard__title">{coffee.name}</p>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
              size="small"
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p className="coffeCard__price">R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  );
}
