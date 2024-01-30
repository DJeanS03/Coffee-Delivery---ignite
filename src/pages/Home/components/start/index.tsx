import { ItemsContainer, StartContainer, StartContent } from "./styles";
import { Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import coffeeImg from "../../../../assets/coffeeImg.svg";
import { ItemsIcons } from "../../../../components/ItemsIcons";
import { useTheme } from "styled-components";

export function Start() {
  const { colors } = useTheme();

  return (
    <StartContainer>
      <StartContent className="container">
        <div>
          <section>
            <div className="titles">
              <h1 className="title">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="subTitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
          </section>

          <ItemsContainer>
            <ItemsIcons
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconColor={colors["brand-yellow-dark"]}
            />

            <ItemsIcons
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconColor={colors["base-text"]}
            />

            <ItemsIcons
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              iconColor={colors["brand-yellow"]}
            />

            <ItemsIcons
              icon={<Package weight="fill" />}
              text="O café chega fresquinho até você"
              iconColor={colors["brand-purple"]}
            />
          </ItemsContainer>
        </div>
        <img src={coffeeImg} />
      </StartContent>
    </StartContainer>
  );
}