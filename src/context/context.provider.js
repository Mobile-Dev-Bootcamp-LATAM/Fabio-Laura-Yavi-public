import React, { useReducer } from "react";
import Context from "./context";
import reducer from "./reducer";

const initialState = {
  selectedCountry: null,
  currentCountry: null,
  countries: [],
  filterBy: ''
};

const AppContextProvider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      { children }
    </Context.Provider>
  );
};

export { AppContextProvider };
