import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";

export function Home() {
    return(
        <HeaderContainer>
            <section className="laa">
                <nav className="titles">
                    <p className="title">
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
                    </div>
                </nav>
            </section>
        </HeaderContainer>
    )
}