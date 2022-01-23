import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";


type InputProps = TextInputProps; //this declaration is intended to short the original type name(not obligatory)

export const Input = ({...rest}: InputProps) => {
  return (
    <Container {...rest}/>
  )
}