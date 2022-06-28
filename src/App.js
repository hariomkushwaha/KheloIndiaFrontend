import "./App.css";
import { useContext } from "react";
import ProponentContext from "./context/ProponentContext";
import AdminContext from "./context/AdminContext";
import TenderForm from "./components/pages/TenderForm";

function App() {
  const { proponent } = useContext(ProponentContext);
  const { admin } = useContext(AdminContext);
  return (
    <>
      <div>
        {console.log("Proponent", proponent)}
        {console.log("Admin", admin)}
        <TenderForm />
      </div>
    </>
  );
}

export default App;
