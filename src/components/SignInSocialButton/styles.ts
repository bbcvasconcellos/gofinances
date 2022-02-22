import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;

  flex-direction: row;
  align-items: center;

  border-radius: 5px;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const SvgContainer = styled.View`
  height: 100%;

  justify-content: center;
  align-items: center;

  padding: ${RFValue(16)}px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;
