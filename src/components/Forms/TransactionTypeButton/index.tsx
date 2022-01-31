import React from "react"
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title, Icon, Button } from "./styles"


interface ButtonProps extends RectButtonProps {
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
    >
      <Button {...rest}>
        <Icon 
          name={icons[type]} /* name is a vector-icons property which defines the icon to be displayed */
          type={ type }  
        />
        <Title>{title}</Title>
      </Button>
    </Container>
  )
}