import React, { useState } from "react";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { Button } from "../../components/Forms/Button";
import { Container, Header, Title, Form, ButtonContainer, Fields } from "./styles";

export const Register = () => {
  const [selectedButton, setSelectedButton] = useState('');

  const handleSelection = (type: 'up' | 'down') => {
    setSelectedButton(type)
  }

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
            <TransactionTypeButton 
              title="income"
              type="up"
              onPress={() => handleSelection('up')}
              isActive={selectedButton === 'up'}
            />
            <TransactionTypeButton 
              title="outcome"
              type="down"
              onPress={() => handleSelection('down')}
              isActive={selectedButton === 'down'}
            />
          </ButtonContainer>
        </Fields>
        <Button title="Confirm" />
      </Form>

    </Container>
  )
}