import React from "react"
import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles"


interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}


export const TransactionTypeButton = ({ title, type, isActive, ...rest }: ButtonProps) => {
  return (
    <Container 
      isActive={isActive}
      type={type}
      {...rest}
    >
      <Icon 
        name={icons[type]} /* name is a vector-icons property which defines the icon to be displayed */
        type={ type }  
      />
      <Title>{title}</Title>
    </Container>
  )
}