import reducer from './reducer';
import { createContext, useReducer } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    past: [],
    present: [
      {
        inputIndex: 0,
        content: '',
      },
    ],
    future: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
