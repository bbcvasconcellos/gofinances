import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { UserHeader } from "../../components/UserHeader";
import { Container, HighlightCards } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <UserHeader />
      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
};
