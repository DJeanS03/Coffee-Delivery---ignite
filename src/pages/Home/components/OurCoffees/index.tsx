import { myCoffees } from "../../../../data/MyCoffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
    return (
        <OurCoffeesContainer className="container">
            <h1>Nossos cafés</h1>

            <CoffeeList>
                {myCoffees.map ((myCoffees) => (
                    <CoffeeCard key={myCoffees.id} myCoffees={myCoffees}/>
                ))}
            </CoffeeList>
        </OurCoffeesContainer>
    )
}