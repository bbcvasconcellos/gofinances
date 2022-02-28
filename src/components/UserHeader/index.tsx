import { useAuth } from "../../hooks/Auth"
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
  const { signOut, user } = useAuth();

  return (
    <Header>
    <UserContainer>
      <UserData>
        <ProfilePic
          source={{ uri: `https://ui-avatars.com/api/?name=${user.name}` }}/>
        <UserBox>
          <UserGreeting>Hello, </UserGreeting>
          <UserName>{user.name}</UserName>
        </UserBox>
      </UserData>
      <LogoutButton onPress={signOut}>
        <Icon name="power" />
      </LogoutButton>
    </UserContainer>
  </Header>
  )
}