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
  const { signInWithGoogle, signInWithApple } = useAuth();

  const handleSignInWithGoogle = async() => {    
    try {
      await signInWithGoogle();
    } catch(error) {
      console.log(error);
      Alert.alert(descriptions.loginError, descriptions.googleLoginError);
    }
  }

  const handleSignInWithApple = async() => {
    try {
      await signInWithApple();
    } catch(error) {
      console.log(error);
      Alert.alert(descriptions.loginError, descriptions.appleLoginError);
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
            onPress={handleSignInWithApple}
          />
        </FooterWrapper>
      </Footer>
      
    </Container>
  )
}