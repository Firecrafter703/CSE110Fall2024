import { createContext, useState, useContext } from "react";
import { Expense } from "../types/types";



// Exercise: Create add budget to the context

interface AppContextType {
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  
}

//Creates the context? Or does it create the basis?
const initialState: AppContextType = {
  budget: 2000,
  setBudget: () => {},
  expenses: [],
  setExpenses: () => {},
  budget: 1000,
  setBudget: () => {},
  
};

//the context compoment?
export const AppContext = createContext<AppContextType>(initialState);


//the provider compoment?
export const AppProvider = (props: any) => {
  const [expenses, setExpenses] = useState<Expense[]>(initialState.expenses);
  const [budget, setBudget] = useState(initialState.budget);

  const [budget, setBudget] = useState<number>(initialState.budget);

  //returning a wrapper
  
  return (

    <AppContext.Provider
      value={{
        budget: budget,
        setBudget: setBudget,
        expenses: expenses,
        setExpenses: setExpenses,
        budget: budget,
        setBudget: setBudget
        
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};



