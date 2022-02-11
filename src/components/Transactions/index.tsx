import React, { useCallback, useContext, useEffect, useState } from "react"
import { useFocusEffect } from "@react-navigation/native";
import { TransactionCard, Data } from "../TransactionCard"
import { HighlightedDataContext } from "../../providers/highlightedData";
import { Title, Transactions, TransactionsListContainer } from "./styles"


export interface DataListProps extends Data {
  id: string;
}

interface DataProps {
  transactions: DataListProps[];
}

export const TransactionList = ({ transactions }: DataProps) => {

  return (
    <Transactions>
      <Title>Transactions</Title>
      <TransactionsListContainer
        data={transactions} 
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionCard data={item}/>} 
      />   
    </Transactions>
  )
} 