/* eslint-disable no-unused-vars */
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
import Admin from "./pages/Admin";
// import Chart from "./pages/Chart";
import AdminListView from "./components/AdminListView";
import AdminAnalyticsView from "./components/AdminAnalyticsView";
import AdminCompareView from "./components/AdminCompareView";
import AdminDashboard from "./components/AdminDashboard";
import Proponent from "./pages/Proponent";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import Pages from "./components/dashboard/layouts/Auth";
import Tender from "./pages/TenderForm";

function App() {
  // const { proponent } = useContext(ProponentContext);
  // const { admin } = useContext(AdminContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/get-started" element={<MainGettingPage />} />
        <Route path="/" element={<MainLandingPage />} />
        {/* <Route path="/Tender/:TenderId" element={<ProposalForm />} /> */}
        <Route path="/post/tender/" element={<Tender />} />
        <Route path="/post/proponent/:tenderID" element={<ProponentForm />} />
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        <Route path="/proponent/signup" element={<SignUp />} />
        <Route path="/proponent/signin" element={<SignIn />} />
        <Route path="/proponent/:proponentID" element={<Proponent />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/list/:tenderID" element={<AdminListView />} />
        <Route path="/admin/list/" element={<ListView />} />
        <Route path="/admin/comparison" element={<AdminCompareView />} />
        <Route
          path="/admin/analytics/:tenderID"
          element={<AdminAnalyticsView />}
        />
        {/* <Route path="/chart" element={<Chart />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
