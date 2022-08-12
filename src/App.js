import { useContext } from "react";
import ProponentContext from "./context/ProponentContext";
import AdminContext from "./context/AdminContext";
import MainGettingPage from "./pages/MainGettingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TenderForm from "./pages/TenderForm";
import Error from "./pages/Error";
import MainLandingPage from "./pages/MainLandingPage";
import AdminDashboard from "./pages/AdminDashboard";
import ProponentForm from "./pages/Proponentform";
// import Pages from "./components/dashboard/layouts/Auth";

function App() {
  const { proponent } = useContext(ProponentContext);
  const { admin } = useContext(AdminContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/get-started" element={<MainGettingPage />} />
        <Route path="/" element={<MainLandingPage />} />
        {/* <Route path="/Tender/:TenderId" element={<ProposalForm />} /> */}
        <Route path="/post/tender/" element={<TenderForm />} />
        <Route path="/post/proponent/" element={<ProponentForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
