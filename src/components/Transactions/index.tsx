import React from "react"
import { TransactionCard } from "../TransactionCard"
import { Title, Transactions } from "./styles"

export const TransactionList = () => {
  return (
    <Transactions>
      <Title>Transactions</Title>
      <TransactionCard />
    </Transactions>
  )
}