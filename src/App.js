import { useContext } from "react";
import ProponentContext from "./context/ProponentContext";
import AdminContext from "./context/AdminContext";
import MainGettingPage from "./pages/MainGettingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TenderForm from "./pages/TenderForm";
import ProponentForm from "./pages/Proponentform";
import Error from "./pages/Error";
import MainLandingPage from "./pages/MainLandingPage";
import ListView from "./components/ListView";
import AdminDashboard from "./pages/AdminDashboard";
import Chart from "./pages/Chart";
import AdminListView from "./components/AdminListView";
import AdminAnalyticsView from "./components/AdminAnalyticsView";
import AdminCompareView from "./components/AdminCompareView";
// import Pages from "./components/dashboard/layouts/Auth";

function App() {
  // const { proponent } = useContext(ProponentContext);
  // const { admin } = useContext(AdminContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/get-started" element={<MainGettingPage />} />
        <Route path="/" element={<MainLandingPage />} />
        {/* <Route path="/Tender/:TenderId" element={<ProposalForm />} /> */}
        <Route path="/post/tender/" element={<TenderForm />} />
        <Route path="/post/proponent/:tenderID" element={<ProponentForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/list/:tenderID" element={<AdminListView />} />
        <Route path="/admin/list/" element={<ListView />} />
        <Route path="/admin/comparison" element={<AdminCompareView />} />
        <Route path="/admin/analytics" element={<AdminAnalyticsView />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
