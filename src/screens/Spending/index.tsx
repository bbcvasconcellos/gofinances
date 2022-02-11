import React from 'react';
import { HistoryCard } from '../../components/HistoryCard';
import { Container, Header, Title } from './styles';

export const Spending = () => {
  return (
    <Container>
      <Header>
        <Title>My Spendings</Title>
      </Header>
      <HistoryCard 
        title="compras"
        amount="$150.00"
        color="red"
      />
    </Container>
  )
}