import React from "react";
import { Container, Title, Header, Icon, Footer, Amount, LastTransaction } from "./style";

export const HighlightCard = () => {
  return (
    <Container>
      <Header>
        <Title>Income</Title>
        <Icon name="arrow-up-circle"/>
      </Header>
      <Footer>
        <Amount>$3,000</Amount>
        <LastTransaction>Last transaction: April 13th</LastTransaction>
      </Footer>
    </Container>
  )
}