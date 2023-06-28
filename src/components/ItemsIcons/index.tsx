import { ReactNode } from "react";
import { IconsContainer, ItemsIconsContainer } from "./styles";

interface ItemsIconsProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconColor: string;
}

export function ItemsIcons({ icon, iconColor, text }: ItemsIconsProps) {
  return (
    <ItemsIconsContainer>
      <IconsContainer iconColor={iconColor}>{icon}</IconsContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </ItemsIconsContainer>
  );
}
