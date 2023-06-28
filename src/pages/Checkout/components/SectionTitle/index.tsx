import { ReactNode } from "react";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps{
    icon: ReactNode;
    title: string;
    subtitle:string;
}

export function SectionTitle({icon, title, subtitle}: SectionTitleProps){
    return(
        <SectionTitleContainer>
            {icon}
            <div>
                <p className="sectionTitle__title">{title}</p>
                <p className="sectionTitle__subtitle">{subtitle}</p>
            </div>
        </SectionTitleContainer>
    )
}