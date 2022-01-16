import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { UserHeader } from "../../components/UserHeader";
import { Container } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <UserHeader />
      <HighlightCard />
    </Container>
  );
};
