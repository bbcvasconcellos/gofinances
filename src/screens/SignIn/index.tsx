import React from "react"
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google-icon.svg";
import LogoSvg from "../../assets/gofinances-logo.svg";

import { SignInSocialButton } from "../../components/SignInSocialButton";
import { useAuth } from "../../hooks/Auth";
import { descriptions } from "../../utils/descriptions";

import { Container, Footer, FooterWrapper, Header, SignInTitle, Title, TitleWrapper } from "./styles"


export const SignIn = () => {
  const { signInWithGoogle } = useAuth();

  const handleSignInWithGoogle = async() => {    
    try {
      await signInWithGoogle();
    } catch(error) {
      console.log(error);
      Alert.alert('Something happened', 'It was not possible to connect to your Google account');
    }
  }
  
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
        <FooterWrapper>
          <SignInSocialButton 
            title={descriptions.googleButton}
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          <SignInSocialButton
            title={descriptions.appleButton}
            svg={AppleSvg}
          />
        </FooterWrapper>
      </Footer>
      
    </Container>
  )
}