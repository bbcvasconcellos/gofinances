import styled from "styled-components/native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { Feather } from "@expo/vector-icons"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { BorderlessButton } from "react-native-gesture-handler"

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px; /* convert the proportion and set the final value into pixels */
  
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`

export const UserContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`

export const UserData = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ProfilePic = styled.Image`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  border-radius: 10px;
`

export const UserBox = styled.View`
  margin-left: 17px;
`

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

//allow us to style an icon
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`

export const LogoutButton = styled(BorderlessButton)`
  
`