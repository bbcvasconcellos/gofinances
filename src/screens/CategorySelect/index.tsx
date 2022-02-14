import { NavigationContext, useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Forms/Button";
import { ReturnButton } from "../../components/ReturnButton";
import { categories } from "../../utils/categories";
import { Container, Header, Title, Category, Icon, Label, Separator, Footer } from "./styles";

interface Category {
  key: string;
  name: string;
}

interface CategoryProps {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void; //closes the modal
}

type NavigationProps = {
  navigate: (screen: string) => void;
}

export const CategorySelect = ({ category, setCategory, closeSelectCategory }: CategoryProps) => {
  const navigation = useNavigation<NavigationProps>();
  const handleCategorySelect = (category: Category) => {
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <ReturnButton
          iconName="chevron-left"
        />
        <Title>Category</Title>
      </Header>
      <FlatList 
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Label>{item.name}</Label>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />} /* this will create some component (in this case a line) between each renderItem */
      />
      <Footer>
        <Button 
          title="Select"
          onPress={closeSelectCategory}  
        />
      </Footer>
    </Container>
  )
}