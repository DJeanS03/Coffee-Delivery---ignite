import {
  PurchaseConfirmationContainer,
  PurchaseDetailsContainer,
} from "./styles";
import { MapPin, Clock, CurrencyDollar } from "@phosphor-icons/react";
import PurchaseConfirmationImg from "../../assets/PurchaseConfirmationImg.svg";
import { ItemsIcons } from "../../components/ItemsIcons";
import { useTheme } from "styled-components";

export function PurchaseConfirmation() {
  const { colors } = useTheme();
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
                Entrega em Rua <strong>João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Credito</strong>
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
