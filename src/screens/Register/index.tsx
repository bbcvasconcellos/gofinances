import React, { useState } from "react";
import { Modal, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
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

//scheme of the shape with the variable that the form should have
const scheme = Yup.object().shape({
  name: Yup.string().required('Title is required'),
  amount: Yup.number()
  .typeError('Numeric value is required')
  .positive('Amount cannot be a negative number')
  .required('Amount is required')
})

export const Register = () => {
  const [selectedButton, setSelectedButton] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  });
  const { control, handleSubmit, formState: { errors } } = useForm({ 
    resolver: yupResolver(scheme) //this will create a pattern (defined in scheme) for the form submission 
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

  const handleRegisterNewTransaction = (form: FormData) => {
    if(!selectedButton) {
      return Alert.alert('Please inform the transaction type');
    }

    if(category.key === 'category' || !category) {
      return Alert.alert('Please select the transaction category')
    }

    //data will contain every input value to be submitted
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
        <Title>Register</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm
            name="name"
            control={control}
            placeholder="Name"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message} 
          />
          <InputForm
            name="amount"
            control={control} 
            placeholder="Price"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message} 
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