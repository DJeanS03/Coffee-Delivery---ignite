import { QuantityInput } from "../../../../components/QuantityInput";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1683504000&Signature=dHM~R8q~YPu1gICvckX-WQFj4pZzITG1qsxCaCgGqJWqOdo4EJ8vapUicJ3D4yGQpM5ibvAIYFOQ887Slvug4hlB-gplg0T-PQMBHr-mnMwcw4XyzYOp7iwPw9geekOcJJnzIUuUdL0f2T0NgPyeFaSXsZ4g8NP5a44YREoXyoDDixlXdiJShHBwxFHzvClxQqQNwjizHNpr-G5oxI97xU6AMZ2b6cOsAL0xVi5N8uJozE73lwIb0wt-n5N9hRNbrmWifPwTLodE2q5k6D-dURPaxPCuUbLTo0LWPiqfOa4xe2UrXExgHWHdL-UBAaE28PxhwUkggS~8rghAvXWSrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

            <Tags>
                <span>Tradiciona</span>
                <span>da boa</span>
            </Tags>

            <Name>
                caffe tradicional
            </Name>

            <Description>
                O tradicional café feito com água quente e grãos moídos
            </Description>

            <CardFooter>
                <div>
                    <span className="symbol">R$</span>
                    <span className="price">9,90</span>
                </div>

                <AddCartWrapper>
                    <QuantityInput />
                    <button>
                        <ShoppingCart weight="fill" size={22}/>
                    </button>
                </AddCartWrapper>              
            </CardFooter>
        </CoffeeCardContainer>
    )
}