import { createContext, useContext, useState } from "react";

// CREATE CONTEXT
export const StoreContext = createContext(undefined);

// PROVIDE CONTEXT
export const StoreProvider = ({ children }) => {
  const [ expand, setExpand ] = useState(false);
  
  const value = {
    expand,
    setExpand,
  }

  return (
    <StoreContext.Provider value={ value }>
      {children}
    </StoreContext.Provider>
  )
}

// CUSTOM CONTEXT HOOK
export const useValueContext = () => useContext(Context);