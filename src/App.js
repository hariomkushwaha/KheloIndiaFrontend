import "./App.css";
import { useContext } from "react";
import ProponentContext from "./context/ProponentContext";
import { Text } from "@chakra-ui/react";
import AdminContext from "./context/AdminContext";

function App() {
  const { proponent } = useContext(ProponentContext);
  const { admin } = useContext(AdminContext);
  return (
    <>
      <div>
        Welcome to the SIH project of <Text color="tomato">RED CODERS</Text>
        {console.log("Proponent", proponent)}
        {console.log("Admin", admin)}
      </div>
    </>
  );
}

export default App;
