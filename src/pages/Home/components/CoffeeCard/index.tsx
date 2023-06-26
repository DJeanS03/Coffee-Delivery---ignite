import { QuantityInput } from "../../../../components/QuantityInput";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";
import { ShoppingCart, Tag } from "@phosphor-icons/react";

export interface Coffees {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  myCoffees: Coffees;
}

export function CoffeeCard({ myCoffees }: CoffeeProps) {
  const formattedPrice = formatMoney(myCoffees.price);

  return (
    <CoffeeCardContainer>
      <img src={`/myCoffees/${myCoffees.photo}`} />

      <Tags>
        {myCoffees.tags.map((tag) => (
          <span key={`${myCoffees.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{myCoffees.name}</Name>

      <Description>{myCoffees.description}</Description>

      <CardFooter>
        <div>
          <span className="symbol">R$</span>
          <span className="price">{formattedPrice}</span>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
