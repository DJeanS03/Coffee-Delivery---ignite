import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import img from "../../../../../public/myCoffees/cremoso.png";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "@phosphor-icons/react";
export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div className="coffeCard__container">
        <img className="coffeCard__img" src={img} />

        <div>
          <p className="coffeCard__title">Expresso Tradicional</p>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p className="coffeCard__price">R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
}
