import React from "react";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { Container, Header, Title, Form, ButtonContainer, Fields } from "./styles";

export const Register = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input 
            placeholder="Name"
          />
          <Input 
            placeholder="Price"
          />
          <ButtonContainer>
            
          </ButtonContainer>
        </Fields>
        <Button title="Confirm" />
      </Form>

    </Container>
  )
}