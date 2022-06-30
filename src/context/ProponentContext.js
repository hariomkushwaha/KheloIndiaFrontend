import { useState, createContext } from "react";

const ProponentContext = createContext();

export const ProponentProvider = (props) => {
  //this will be the Proponent object that will store all data
  const [proponent, setProponent] = useState({
    name: "Mai hu thekedar",
  });

  return (
    <ProponentContext.Provider
      value={{
        proponent,
        setProponent,
      }}
    >
      {props.children}
    </ProponentContext.Provider>
  );
};

export default ProponentContext;

//To use this in any component
//1. Import -> import { useContext } from "react";
//2. Import -> import ProponentContext from "./context/ProponentContext";
//3. Use the values like this -> const value = useContext(ProponentContext);
