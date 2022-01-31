import { 
  Header,
  UserContainer,
  UserData,
  ProfilePic,
  UserBox,
  UserGreeting,
  UserName,
  Icon,
  LogoutButton
} from "./style"

export const UserHeader = () => {
  return (
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
      <LogoutButton onPress={() => {}}>
        <Icon name="power" />
      </LogoutButton>
    </UserContainer>
  </Header>
  )
}