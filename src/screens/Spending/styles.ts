import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${RFValue(113)}px;
  width: 100%;

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 19px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    padding: 24,
    paddingBottom: getBottomSpace(),
  },
})``;

export const GraphContainer = styled.View`
  width: 100%;
  align-items: center;
`;
