import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const sidebarToggle = () => {
    setIsSideBarOpen(!isSidebarOpen);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        setIsSideBarOpen,
        isModalOpen,
        setIsModalOpen,
        modalToggle,
        sidebarToggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
