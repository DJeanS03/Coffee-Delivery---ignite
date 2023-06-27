import { useCart } from "../../../../Hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ResumeSectionContainer } from "./styles";

const delivery_value = 3.5

export function ResumeSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = delivery_value + cartItemsTotal

  const formartDeliveryPrice = formatMoney(delivery_value)
  const formartItemsTotal = formatMoney(cartItemsTotal)
  const formartCartTotal = formatMoney(cartTotal)


  return (
    <ResumeSectionContainer>
      <div>
        <p className="resumeSection__title">Total de itens</p>
        <p className="resumeSection__price">R$ {formartItemsTotal}</p>
      </div>
      <div>
        <p className="resumeSection__title">Entrega</p>
        <p className="resumeSection__price">R$ {formartDeliveryPrice}</p>
      </div>
      <div>
        <p className="resumeSection__total">Total</p>
        <p className="resumeSection__total">R$ {formartCartTotal}</p>
      </div>

      <button className="resumeSection__button" disabled={cartQuantity <= 0}>CONFIRMAR PEDIDO</button>
    </ResumeSectionContainer>
  );
}
