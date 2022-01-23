import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

//brings all props from TouchableOpacity and add the title prop
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}


export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}