import { ItemsContainer, StartContainer, StartContent, } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import coffeeImg  from '../../../../assets/coffeeImg.svg'
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
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </p>
                    </div>   
                </section>

                <ItemsContainer>
                   <ItemsIcons
                    icon={<ShoppingCart weight="fill"/>}
                    text="Compra simples e segura"
                    iconColor={colors['brand-yellow-dark']}
                   />

                    <ItemsIcons
                    icon={<Package weight="fill"/>}
                    text="Embalagem mantém o café intacto"
                    iconColor={colors['base-text']}
                   />

                   <ItemsIcons
                    icon={<Timer weight="fill"/>}
                    text="Entrega rápida e rastreada"
                    iconColor={colors['brand-yellow']}
                   />    

                    <ItemsIcons
                    icon={<Package weight="fill"/>}
                    text="O café chega fresquinho até você"
                    iconColor={colors['brand-purple']}
                   />
                </ItemsContainer>
              </div>
                <img src={coffeeImg}/>
            </StartContent>
        </StartContainer>  
    )
  
}


{/*    <p className="title">
       Encontre o café perfeito para qualquer hora do dia
   </p>
   <span className="subTitle">
       Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
   </span>
</nav>
<nav className="description">
   <div className="descriptionBox">
       <span className="boxIcons yellowD">
           <ShoppingCart weight="fill" className="icon"/>
       </span>
       <p className="descriptionText">
           Compra simples e segura
       </p>
   </div>

   <div className="descriptionBox">
       <span className="boxIcons yellow">
           <Timer weight="fill" className="icon"/>
       </span>
       <p className="descriptionText">
           Entrega rápida e rastreada
       </p>
   </div>

   <div className="descriptionBox">
       <span className="boxIcons baseT">
           <Package weight="fill" className="icon"/>
       </span>
       <p className="descriptionText">
           Embalagem mantém o café intacto
       </p>
   </div>

   <div className="descriptionBox">
       <span className="boxIcons purple">
           <Coffee weight="fill" className="icon"/>
       </span>
       <p className="descriptionText">
           O café chega fresquinho até você
       </p>
   </div> */}
