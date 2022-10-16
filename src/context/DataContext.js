import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();
export const useData = () => useContext(AppContext);
const DataContext = ({ children }) => {
  const [todaysNumber, setTodaysNumber] = useState(1);
  const [taskListToday, setTaskListToday] = useState([])
  const value = {
    todaysNumber, setTodaysNumber,
    taskListToday, setTaskListToday,
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default DataContext