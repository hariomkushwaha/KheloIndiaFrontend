/* eslint-disable react-hooks/exhaustive-deps */
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const ProposalForm = () => {
  const [extraFields, setExtraFields] = useState();
  useEffect(() => {
    setExtraFields(JSON.parse(localStorage.getItem("extraFields")));
    console.log(extraFields);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {extraFields &&
          extraFields.map((item) => (
            <TextField variant="standard" key={item} name={item} label={item} />
          ))}
      </div>
    </div>
  );
};

export default ProposalForm;
