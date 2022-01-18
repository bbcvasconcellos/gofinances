import React from "react"
import { Amount, Category, CategoryName, Container, Date, Footer, Icon, Title } from "./styles"

export const TransactionCard = () => {
  return(
    <Container>
      <Title>App Development</Title>
      <Amount>$5,000</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign"/>
          <CategoryName>Work</CategoryName>
        </Category>
        <Date>01/15/2022</Date>
      </Footer>
    </Container>
  )
}