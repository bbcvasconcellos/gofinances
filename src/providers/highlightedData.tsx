import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface HighlightedProps {
  amount: string;
  lastTransaction?: string
}

interface HighlightedData {
  entries: HighlightedProps;
  expenses: HighlightedProps;
  total: HighlightedProps;
}

interface IHighlightedProps {
  highlightedData: HighlightedData;
  setHighlightedData: Dispatch<SetStateAction<HighlightedData>>;
}

interface HighlightedProviderProps {
  children: ReactNode;
}

export const HighlightedDataContext = createContext<IHighlightedProps>({} as IHighlightedProps);

export const HighlightedDataProvider = ({ children }: HighlightedProviderProps) => {
  const [highlightedData, setHighlightedData] = useState<HighlightedData>({} as HighlightedData);

  return (
    <HighlightedDataContext.Provider value={{highlightedData, setHighlightedData}}>
      { children }
    </HighlightedDataContext.Provider>
  )
}