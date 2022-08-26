import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const ProposalForm = () => {
  const [extraFields, setExtraFields] = useState();
  useEffect(() => {
    setExtraFields(localStorage.getItem("extraFields"));
    console.log(extraFields);
  }, []);

  return (
    <div>
      <div>{extraFields.map((item) => console.log(item))}</div>
    </div>
  );
};

export default ProposalForm;
