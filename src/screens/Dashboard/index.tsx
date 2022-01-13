import React from "react";
import { 
  Container, 
  Header,
  UserContainer,
  UserData,
  ProfilePic,
  UserBox,
  UserGreeting,
  UserName
} from "./styles";

export const Dashboard = () => {
  return (
    <Container>
     <Header>
       <UserContainer>
       <UserData>
         <ProfilePic source={{ uri: 'https://avatars.githubusercontent.com/u/61482516?v=4' }}/>
         <UserBox>
           <UserGreeting>Olá, </UserGreeting>
           <UserName>Bruno!</UserName>
         </UserBox>
       </UserData>
       </UserContainer>
     </Header>
    </Container>
  )
}