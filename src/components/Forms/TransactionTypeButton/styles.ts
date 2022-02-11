import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
  type: "up" | "down";
}

interface ButtonProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled.View<ButtonProps>`
  width: 48%; /* ${RFValue(160)}px; */

  border-radius: 5px;
  border-style: solid;
  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-color: ${({ theme }) => theme.colors.text};

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.warning_light};
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.sucess_light};
    `}
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px 32px;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.warning};

  margin-right: 12px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
