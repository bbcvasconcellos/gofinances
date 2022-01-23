import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";


interface IconProps {
  type: 'up' | 'down';
}

interface ButtonProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 48%; /* ${RFValue(160)}px; */

  padding: 16px 36px;
  border-radius: 5px;
  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-color: ${({ theme }) => theme.colors.text};

  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.warning_light};
  `}
  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.sucess_light};
  `}

`

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) => type === "up" ? theme.colors.success : theme.colors.warning};

  margin-right: 12px;
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`