import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Category, Icon } from "./styles";


interface CategoryProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const CategorySelection = ({ title, onPress }: CategoryProps) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon 
        name="chevron-down"
      />
    </Container>
  )
}