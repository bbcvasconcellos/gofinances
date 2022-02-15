import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { addMonths } from 'date-fns';

import { useTheme } from 'styled-components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { HistoryCard } from '../../components/HistoryCard';
import { DataListProps } from '../../components/Transactions';
import { categories } from '../../utils/categories';

import { Container, Content, GraphContainer, Header, Title } from './styles';
import { SelectMonth } from '../../components/SelectMonth';


interface CategoryData {
  name: string;
  totalFormated: string;
  total: number;
  color: string;
  percent: string;
}

export const Spending = () => {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const theme = useTheme();

  const dataKey = '@gofinances:transactions';

  useEffect(() => {
    const loadData = async() => {
      const response = await AsyncStorage.getItem(dataKey);
      const responseFormated = response ? JSON.parse(response) : [];
      
      const expenses = responseFormated.filter((expense: DataListProps) => 
        expense.type === 'negative' && 
        new Date(expense.date).getMonth() === selectedDate.getMonth() &&
        new Date(expense.date).getFullYear() === selectedDate.getFullYear()
      );

      const totalExpense = expenses.reduce((acc: number, expense: DataListProps) => {
        return acc + Number(expense.amount)
      }, 0);

      const totalByCategories: CategoryData[] = []

      categories.forEach((category) => {
        let categorySum = 0;

        expenses.forEach((expense: DataListProps) => {
          if(expense.category === category.key)
          categorySum += Number(expense.amount);
        });

        if(categorySum > 0) {
          const totalFormated = categorySum.toLocaleString('en-US', {
            style: 'currency',
            currency: 'usd'
          });

          const percent = `${((categorySum / totalExpense) * 100).toFixed(0)}%`;

          totalByCategories.push({
            name: category.name,
            total: categorySum,
            totalFormated,
            color: category.color,
            percent,
          });
        }
      });
      setTotalByCategories(totalByCategories);      
    }
    loadData();
  }, [selectedDate]);

  return (
    <Container>
      <Header>
        <Title>My Spendings</Title>
      </Header>
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: useBottomTabBarHeight(),
        }}
      >
        <SelectMonth 
          selectedDate={ selectedDate }
          setSelectedDate={ setSelectedDate }
        />
        <GraphContainer>
          <VictoryPie 
            data={totalByCategories}
            x='percent'
            y='total'
            colorScale={totalByCategories.map((category: CategoryData) => category.color)}
            style={{
              labels: {
                fontSize: RFValue(18),
                fontWeight: 'bold',
                fill: theme.colors.shape
              }
            }}
            labelRadius={50}
          />
        </GraphContainer>
        {
          totalByCategories.map((category: CategoryData, index: number) => (
            <HistoryCard 
              key={index}
              title={category.name}
              amount={category.totalFormated}
              color={category.color}
          />
          ))   
        }
      </Content>
    </Container>
  )
}