import { createContext, useEffect, useState } from "react";
import jsonData from "../data/home.json";

const DataContext = createContext();

function DataContextProvider(props) {
  const data = jsonData;

  return (
    <DataContext.Provider
      value={{
        data,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
export { DataContextProvider };
