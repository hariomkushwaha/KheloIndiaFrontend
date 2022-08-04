import "./App.css";
import { useContext } from "react";
import ProponentContext from "./context/ProponentContext";
import AdminContext from "./context/AdminContext";
import AdminDashboard from "./components/AdminDashboard";
// import TenderForm from "./components/pages/TenderForm";
// import Pages from "./components/dashboard/layouts/Auth";

function App() {
  const { proponent } = useContext(ProponentContext);
  const { admin } = useContext(AdminContext);
  return (
    <>
      <div>
        {console.log("Proponent", proponent)}
        {console.log("Admin", admin)}
        {/* <TenderForm /> */}
        {/* <Pages /> */}
        <AdminDashboard/>
      </div>
    </>
  );
}

export default App;
