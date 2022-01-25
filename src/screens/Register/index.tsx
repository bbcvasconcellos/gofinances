import React, { useState } from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Input } from "../../components/Forms/Input";
import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { Button } from "../../components/Forms/Button";
import { Container, Header, Title, Form, ButtonContainer, Fields } from "./styles";
import { CategorySelection } from "../../components/Forms/CategorySelection";
import { CategorySelect } from "../CategorySelect";
import { useForm } from "react-hook-form";


interface FormData {
  /* name: string;
  amount: string; */
  [key: string]: string; 
}

export const Register = () => {
  const [selectedButton, setSelectedButton] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  });
  const { control, handleSubmit } = useForm();

  const handleSelection = (type: 'up' | 'down') => {
    setSelectedButton(type)
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }
  
  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleRegisterNewTransaction = (form: FormData) => {
    const data = {
      name: form.name,
      amount: form.amount,
      selectedButton,
      category: category.name
    }
    console.log(data);
    
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm
            name="name"
            control={control} 
            placeholder="Name"
          />
          <InputForm
            name="amount"
            control={control} 
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
        <Button   
          title="Confirm" 
          onPress={handleSubmit(handleRegisterNewTransaction)}  
        />
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