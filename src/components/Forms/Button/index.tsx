import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

//brings all props from RectButton and add the title prop
interface ButtonProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}


export const Button = ({ title, onPress, ...rest }: ButtonProps) => {
  return (
    <Container 
      onPress={onPress}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  )
}