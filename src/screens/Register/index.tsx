import React, { useState } from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { Button } from "../../components/Forms/Button";
import { Container, Header, Title, Form, ButtonContainer, Fields } from "./styles";
import { CategorySelection } from "../../components/Forms/CategorySelection";
import { CategorySelect } from "../CategorySelect";

export const Register = () => {
  const [selectedButton, setSelectedButton] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  });

  const handleSelection = (type: 'up' | 'down') => {
    setSelectedButton(type)
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }
  
  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <CategorySelection 
            title={category.name}
            onPress={handleOpenModal}  
          />
        </Fields>
        <Button title="Confirm" />
      </Form>
      <Modal visible={openModal}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseModal}
        />
      </Modal>

    </Container>
    </TouchableWithoutFeedback>
  )
}