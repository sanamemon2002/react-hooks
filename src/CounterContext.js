import React, { createContext, useReducer, useContext } from "react";


const initialState = { value: 0 };


const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return state.value > 0 ? { value: state.value - 1 } : state;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};


const CounterContext = createContext();


export const useSelector = (selector) => {
  const { state } = useContext(CounterContext);
  return selector(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(CounterContext);
  return dispatch;
};


export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
