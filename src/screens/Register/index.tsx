import React, { useState } from "react";
import { Modal, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import uuid from "react-native-uuid";

import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { Button } from "../../components/Forms/Button";
import { Container, Header, Title, Form, ButtonContainer, Fields } from "./styles";
import { CategorySelection } from "../../components/Forms/CategorySelection";
import { CategorySelect } from "../CategorySelect";


interface FormData {
  /* name: string;
  amount: string; */
  [key: string]: string; 
}

type NavigationProps = {
  navigate: (screen:string) => void;
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
  const { control, handleSubmit, reset, formState: { errors } } = useForm({ 
    resolver: yupResolver(scheme) //this will create a pattern (defined in scheme) for the form submission 
  });
  const navigation = useNavigation<NavigationProps>();
  const dataKey = "@gofinances:transactions";

  const handleSelection = (type: 'positive' | 'negative') => {
    setSelectedButton(type)
  }  

  const handleCloseModal = () => {
    setOpenModal(false);
  }
  
  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleRegisterNewTransaction = async(form: FormData) => {
    if(!selectedButton) {
      return Alert.alert('Please inform the transaction type');
    }

    if(category.key === 'category' || !category) {
      return Alert.alert('Please select the transaction category')
    }

    //data will contain every input value to be submitted
    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: selectedButton,
      category: category.key,
      date: new Date()
    }
    
    try {
      const data = await AsyncStorage.getItem(dataKey); //get any stored value
      const currentData = data ? JSON.parse(data) : [];
      const formattedData = [
        ...currentData, //spread all the previous data from async storage
        newTransaction //stores the new incoming data 
      ]
      await AsyncStorage.setItem(dataKey, JSON.stringify(formattedData)); //save the new formatted into async 
      reset(); //reset form fields
      setSelectedButton('');
      setCategory({
        key: 'category',
        name: 'Category',
      });
      navigation.navigate('Dashboard')
      
    } 
    catch(err) {
      console.log(err);
      Alert.alert('Could not save transaction');
    }
  }

/*   useEffect(() => {
    const loadData = async() => {
      const data = await AsyncStorage.getItem(dataKey)
      console.log(JSON.parse(data!)); //obs: data! means data will always have some content
    }
    loadData()
  }, [])
 */
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
              onPress={() => handleSelection('positive')}
              isActive={selectedButton === 'positive'}
            />
            <TransactionTypeButton 
              title="outcome"
              type="down"
              onPress={() => handleSelection('negative')}
              isActive={selectedButton === 'negative'}
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