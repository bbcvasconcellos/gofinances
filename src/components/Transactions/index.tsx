import React from "react"
import { TransactionCard, Data } from "../TransactionCard"
import { Title, Transactions, TransactionsList } from "./styles"


export interface DataListProps extends Data {
  id: string;
}

export const TransactionList = () => {
  
  const data: DataListProps[] = [{
    id: '1',
    type: "positive",
    title: "App development",
    amount: "$5,000",
    category: {
      name: "work",
      icon: "dollar-sign"
    },
    date: "01/20/2022",
    },
    {
      id: '2',
      type: "negative",
      title: "Japanese restaurant",
      amount: "$150",
      category: {
        name: "food",
        icon: "coffee"
      },
      date: "02/05/2022",
    },
    {
      id: '3',
      type: "positive",
      title: "Sales",
      amount: "$200",
      category: {
        name: "sales",
        icon: "shopping-bag"
      },
      date: "01/21/2022",
    },
    {
      id: '4',
      type: "negative",
      title: "House maintenance",
      amount: "$600",
      category: {
        name: "household",
        icon: "tool"
      },
      date: "01/24/2022",
    },
  ]
  
  return (
    <Transactions>
      <Title>Transactions</Title>
      <TransactionsList 
        data={data} 
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionCard data={item}/>} 
      />
      
    </Transactions>
  )
} 