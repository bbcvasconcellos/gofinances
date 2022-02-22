import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { Button, SvgContainer, Text } from "./styles"

interface ButtonProps extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>
}

export const SignInSocialButton = ({ title, svg: Svg, ...rest }: ButtonProps) => {
  return (
    <Button {...rest}>
      <SvgContainer>
        <Svg />
      </SvgContainer>
      <Text>{title}</Text>
    </Button>
  )
}