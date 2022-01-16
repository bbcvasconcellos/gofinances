import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  Container,
  Header,
  UserContainer,
  UserData,
  ProfilePic,
  UserBox,
  UserGreeting,
  UserName,
  Icon,
} from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserContainer>
          <UserData>
            <ProfilePic
              source={{ uri: "https://avatars.githubusercontent.com/u/61482516?v=4" }}/>
            <UserBox>
              <UserGreeting>Hello, </UserGreeting>
              <UserName>Bruno!</UserName>
            </UserBox>
          </UserData>
          <Icon name="power" />
        </UserContainer>
      </Header>
      <HighlightCard />
    </Container>
  );
};
