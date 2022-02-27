import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"

import { useTheme } from "styled-components";

import { HighlightCard } from "../../components/HighlightCard";
import { DataListProps, TransactionList } from "../../components/Transactions";
import { UserHeader } from "../../components/UserHeader";
import { HighlightedDataContext } from "../../providers/highlightedData";
import { Container, HighlightCards, LoadContainer } from "./styles";


export const Dashboard = () => {
  const theme = useTheme();
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { highlightedData, setHighlightedData } = useContext(HighlightedDataContext)

  const dataKey = "@gofinances:transactions";

  const getLastTransactionDate = (collection: DataListProps[], transactionType: 'positive' | 'negative') => {
    const lastTransaction = new Date(Math.max.apply(Math, collection
      .filter((transaction: DataListProps) => transaction.type === transactionType)
      .map((transaction: DataListProps) => new Date(transaction.date).getTime())))      

    return `${lastTransaction.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long'
    })}`
  }
  
  const getTransactions = async() => {
    const response = await AsyncStorage.getItem(dataKey);
    
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensesTotal = 0;

    const formatedTransactions: DataListProps[] = transactions.map((transaction: DataListProps) => {
      const amount = Number(transaction.amount).toLocaleString('en-US', {
        style: 'currency',
        currency: 'usd'
      }); 

      const date = Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(transaction.date));

      if(transaction.type === 'positive') {
        entriesTotal += Number(transaction.amount)
      } else {
        expensesTotal += Number(transaction.amount)
      }

      return {
        id: transaction.id,
        name: transaction.name,
        amount,
        type: transaction.type,
        category: transaction.category,
        date
      }
    });

    setTransactions(formatedTransactions);   
    
    const lastEntry = getLastTransactionDate(transactions, 'positive');
    const lastExpense = getLastTransactionDate(transactions, 'negative');

    setHighlightedData({
      entries: {
        amount: entriesTotal.toLocaleString('en-US', {
          style: 'currency',
          currency: 'usd'
        }),
        lastTransaction: `Last transaction: ${lastEntry}`
      },
      expenses: {
        amount: expensesTotal.toLocaleString('en-US', {
          style: 'currency',
          currency: 'usd'
        }),
        lastTransaction: `Last transaction: ${lastExpense}`
      },
      total: {
        amount: (entriesTotal - expensesTotal).toLocaleString('en-US', {
          style: 'currency',
          currency: 'usd'
        })
      }
    })
    setIsLoading(false);
  }

  /*Load the list*/
  useEffect(() => {
    /* AsyncStorage.removeItem(dataKey) -> enable this to clean up the list*/ 
    getTransactions();
  }, []);

  /*Updates the list whenever the user return to the page*/
  useFocusEffect(useCallback(() => {
    getTransactions();
  }, []))  

  return (
    <Container>
      { isLoading ? 
      <LoadContainer>
        <ActivityIndicator 
          color={theme.colors.secondary}
          size="large"
        />
      </LoadContainer> : 
      <>
        <UserHeader />
        <HighlightCards>
          <HighlightCard 
            type='up'
            title="income" 
            amount={highlightedData?.entries.amount}
            lastTransaction={highlightedData?.entries?.lastTransaction}
          />
          <HighlightCard 
            type='down'
            title="expenses" 
            amount={highlightedData?.expenses.amount}
            lastTransaction={highlightedData.expenses.lastTransaction}
          />
          <HighlightCard 
            type='total'
            title="total" 
            amount={highlightedData?.total.amount}
          />
        </HighlightCards>
        <TransactionList transactions={transactions}/>
      </>
      }
    </Container>
  );
};
