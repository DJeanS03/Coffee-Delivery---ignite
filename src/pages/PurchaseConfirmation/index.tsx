import {
  PurchaseConfirmationContainer,
  PurchaseDetailsContainer,
} from "./styles";
import { MapPin, Clock, CurrencyDollar } from "@phosphor-icons/react";
import PurchaseConfirmationImg from "../../assets/PurchaseConfirmationImg.svg";
import { ItemsIcons } from "../../components/ItemsIcons";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { PaymentMethodInput } from "../Checkout/components/PaymentMethodInput";
import { paymentMethods } from "../Checkout/components/CheckoutForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function PurchaseConfirmation() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if(!state) return <></>

  return (
    <PurchaseConfirmationContainer className="container">
      <div>
        <p className="purchase__title">Uhu! Pedido Confirmado</p>
        <p className="purchase__subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>

      <section>
        <PurchaseDetailsContainer>
          <ItemsIcons
            icon={<MapPin weight="fill" />}
            text={
              <p>
                Entrega em{" "}
                <strong>
                  {state.street} , {state.number}
                </strong>
                <br />
                {state.neighborhood} - {state.city}, {state.UF}
              </p>
            }
            iconColor={colors["brand-purple"]}
          />

          <ItemsIcons
            icon={<Clock weight="fill" />}
            text={
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            }
            iconColor={colors["brand-yellow"]}
          />

          <ItemsIcons
            icon={<MapPin weight="fill" />}
            text={
              <p>
                Pagamento na Entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </p>
            }
            iconColor={colors["brand-yellow-dark"]}
          />
        </PurchaseDetailsContainer>

        <img src={PurchaseConfirmationImg} />
      </section>
    </PurchaseConfirmationContainer>
  );
}
