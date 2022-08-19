import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";

const Admin = (props) => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <>
      <AdminNavbar
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      />
      {props.children}
    </>
  );
};

export default Admin;
