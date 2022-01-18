import React from "react";
import { Container, Title, Header, Icon, Footer, Amount, LastTransaction } from "./styles";

interface CardProps {
  type: 'up' | 'down' | 'total';
  title: string;
  lastTransaction: string;
  amount: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export const HighlightCard = ({ title, amount, lastTransaction, type }: CardProps) => {
  return (
    <Container type={ type }>
      <Header>
        <Title type={ type }>{title}</Title>
        <Icon 
          name={icon[type]} 
          type={ type }
        />
      </Header>
      <Footer>
        <Amount type={ type }>{amount}</Amount>
        <LastTransaction type={ type }>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}