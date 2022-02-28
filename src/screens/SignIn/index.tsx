import React, { useState } from "react"
import { ActivityIndicator, Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google-icon.svg";
import LogoSvg from "../../assets/gofinances-logo.svg";

import { SignInSocialButton } from "../../components/SignInSocialButton";
import { useAuth } from "../../hooks/Auth";
import { descriptions } from "../../utils/descriptions";

import { Container, Footer, FooterWrapper, Header, SignInTitle, Title, TitleWrapper } from "./styles"
import { useTheme } from "styled-components";


export const SignIn = () => {
  const { signInWithGoogle, signInWithApple } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  const handleSignInWithGoogle = async() => {    
    try {
      setIsLoading(true)
      return await signInWithGoogle();
    } catch(error) {
      console.log(error);
      Alert.alert(descriptions.loginError, descriptions.googleLoginError);
      setIsLoading(false);
    } 
  }

  const handleSignInWithApple = async() => {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch(error) {
      console.log(error);
      Alert.alert(descriptions.loginError, descriptions.appleLoginError);
      setIsLoading(false);
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
          { Platform.OS === "ios" && <SignInSocialButton
            title={descriptions.appleButton}
            svg={AppleSvg}
            onPress={handleSignInWithApple}
          />}
          
        </FooterWrapper>
        { isLoading && 
          <ActivityIndicator 
            color={theme.colors.shape} 
            style={{ marginTop: 18 }}
        />}
      </Footer>
      
    </Container>
  )
}