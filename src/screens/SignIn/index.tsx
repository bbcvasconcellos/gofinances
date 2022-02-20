import React from "react"
import { descriptions } from "../../utils/descriptions";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google-icon.svg";
import LogoSvg from "../../assets/gofinances-logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Footer, Header, SignInTitle, Title, TitleWrapper } from "./styles"

export const SignIn = () => {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />
          <Title>{descriptions.SignInHeader}</Title>
        </TitleWrapper>
        <SignInTitle>
          {descriptions.signInTitle}
        </SignInTitle>
      </Header>
      <Footer>

      </Footer>
      
    </Container>
  )
}