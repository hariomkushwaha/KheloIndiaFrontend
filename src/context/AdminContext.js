import { useState, createContext } from "react";

const AdminContext = createContext();

export const AdminProvider = (props) => {
  //this will be the Admin object that will store all data
  const [admin, setAdmin] = useState({
    name: "ADMIN",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProposals, setSelectedProposals] = useState([]);

  return (
    <AdminContext.Provider
      value={{
        admin,
        setAdmin,
        selectedProposals,
        setSelectedProposals,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContext;

//To use this in any component
//1. Import -> import { useContext } from "react";
//2. Import -> import AdminContext from "./context/AdminContext";
//3. Use the values like this -> const value = useContext(AdminContext);
