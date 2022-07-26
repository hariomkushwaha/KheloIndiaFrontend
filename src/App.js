
import MainLandingPage from './components/LandingPage/MainLandingPage';
import MainGettingPage from './components/GettingStarted/MainGettingPage';
import { useContext } from "react";
import ProponentContext from "./context/ProponentContext";
import AdminContext from "./context/AdminContext";
// import TenderForm from "./components/pages/TenderForm";
// import Pages from "./components/dashboard/layouts/Auth";

function App() {
  const { proponent } = useContext(ProponentContext);
  const { admin } = useContext(AdminContext);
  return (
    <>
      <div className="App">
        {console.log("Proponent", proponent)}
        {console.log("Admin", admin)}
        <MainGettingPage/>
        <h1>Chal raha hai</h1>
      </div>
    </>
  );
}

export default App;
