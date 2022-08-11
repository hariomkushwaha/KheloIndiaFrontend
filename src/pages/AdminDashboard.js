import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Card from "../components/Card";

const AdminDashboard = () => {
  const [tenderValues, setTenderValues] = useState([]);
  const handleTenders = async () => {
    try {
      const res = await fetch("/API/tenderform", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = res.json()
      data.then(response => {
        setTenderValues(response);
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleTenders();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {
        tenderValues.map((tenderValue) => {
          return <Card key={tenderValue.tenderId} values={tenderValue} />
        })
        }
      </div>
    </>
  );
};

export default AdminDashboard;
