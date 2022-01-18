import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionList } from "../../components/Transactions";
import { UserHeader } from "../../components/UserHeader";
import { Container, HighlightCards } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <UserHeader />
      <HighlightCards>
        <HighlightCard 
          type='up'
          title="income" 
          amount="$3,000" 
          lastTransaction="Last transaction: January 2nd"
        />
        <HighlightCard 
          type='down'
          title="expenses" 
          amount="$1,000" 
          lastTransaction="Last transaction: January 15th"
        />
        <HighlightCard 
          type='total'
          title="total" 
          amount="$2,000" 
          lastTransaction="Last transaction: January 2nd"
        />
      </HighlightCards>
      <TransactionList />
    </Container>
  );
};
