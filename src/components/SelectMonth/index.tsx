import React, { Dispatch, SetStateAction, useState } from 'react'
import { addMonths, subMonths, format } from 'date-fns';
import { MonthSelectIcon, MonthSelectionButton, SelectionContainer, Month } from './styles'


interface SelectMonthProps {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

export const SelectMonth = ({ selectedDate, setSelectedDate }: SelectMonthProps) => {
  const handleDateChange = (action: 'next' | 'prev') => {
    if(action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }  

  return (
    <SelectionContainer>
      <MonthSelectionButton onPress={() => handleDateChange('prev')}>
        <MonthSelectIcon name='chevron-left'/>
      </MonthSelectionButton>
      <Month>{format(selectedDate, 'MMMM, yyyy')}</Month>
      <MonthSelectionButton onPress={() => handleDateChange('next')}>
        <MonthSelectIcon name='chevron-right'/>
      </MonthSelectionButton>
    </SelectionContainer>
  )
}