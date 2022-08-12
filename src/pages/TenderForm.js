import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const TenderForm = () => {
  const [values, setValues] = useState({
    orgChain: "",
    refNumber: "",
    tenderId: "",
    itemwiseTechnicalEvaluation: "",
    tenderType: "",
    generalTechnicalEvaluation: "",
    paymentMode: "",
    twoStageBinding: "",
    tenderCategory: "",
    tenderFee: "",
    tenderFeePayableTo: "",
    tenderFeeExemption: "",
    tenderFeePayableAt: "",
    emdFee: "",
    emdPercent: "",
    emdFeePayableTo: "",
    emdFeePayableAt: "",
    emdFeeType: "",
    workItemTitle: "",
    workItemDescription: "",
    workItemPreQualification: "",
    workItemRemarks: "",
    publishDate: "",
    bidOpeningDate: "",
    bidSubmissionStartDate: "",
    bidSubmissionEndDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      orgChain,
      refNumber,
      tenderId,
      itemwiseTechnicalEvaluation,
      tenderType,
      generalTechnicalEvaluation,
      paymentMode,
      twoStageBinding,
      tenderCategory,
      tenderFee,
      tenderFeePayableTo,
      tenderFeeExemption,
      tenderFeePayableAt,
      emdFee,
      emdPercent,
      emdFeePayableTo,
      emdFeePayableAt,
      emdFeeType,
      workItemTitle,
      workItemDescription,
      workItemPreQualification,
      workItemRemarks,
      publishDate,
      bidOpeningDate,
      bidSubmissionStartDate,
      bidSubmissionEndDate,
    } = values;

    const res = await fetch("/API/tenderform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orgChain,
        refNumber,
        tenderId,
        itemwiseTechnicalEvaluation,
        tenderType,
        generalTechnicalEvaluation,
        paymentMode,
        twoStageBinding,
        tenderCategory,
        tenderFee,
        tenderFeePayableTo,
        tenderFeeExemption,
        tenderFeePayableAt,
        emdFee,
        emdPercent,
        emdFeePayableTo,
        emdFeePayableAt,
        emdFeeType,
        workItemTitle,
        workItemDescription,
        workItemPreQualification,
        workItemRemarks,
        publishDate,
        bidOpeningDate,
        bidSubmissionStartDate,
        bidSubmissionEndDate,
      })
    });
    
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Submission");
    } else {
      window.alert("Posted Successfully");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: 3,
      }}
    >
      <Typography variant="h3" component="div">
        Post a Tender
      </Typography>
      <Typography variant="h5" component="div">
        Khelo India{"  "}
        <Link href="/get-started" underline="none">
          Site
        </Link>{" "}
        ✌️
      </Typography>
      <br />
      <Box
        sx={{
          m: 2,
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            width: "40%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1" component="div">
            Basic Details
          </Typography>
          <br />
          <TextField
            name="orgChain"
            value={values.orgChain}
            onChange={handleChange}
            id="standard-basic"
            label="Organisation Chain"
            variant="standard"
          />
          <TextField
            name="refNumber"
            value={values.refNumber}
            onChange={handleChange}
            id="standard-basic"
            label="Refernce Number"
            variant="standard"
          />
          <TextField
            name="tenderId"
            value={values.tenderId}
            onChange={handleChange}
            id="standard-basic"
            label="Tender ID"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Itemwise Technical Evaluation Allowed"
            variant="standard"
            name="itemwiseTechnicalEvaluation"
            value={values.itemwiseTechnicalEvaluation}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Tender Type"
            variant="standard"
            name="tenderType"
            value={values.tenderType}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="General Technical Evaluation Allowed"
            variant="standard"
            name="generalTechnicalEvaluation"
            value={values.generalTechnicalEvaluation}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Payment Mode Offline"
            variant="standard"
            name="paymentMode"
            value={values.paymentMode}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Allowed 2-Stage Bidding"
            variant="standard"
            name="twoStageBinding"
            value={values.twoStageBinding}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Tender Category"
            name="tenderCategory"
            value={values.tenderCategory}
            onChange={handleChange}
            variant="standard"
          />
          <br />
          <Divider />
          <br />
          <Typography variant="body1" component="div">
            Tender Fee Details
          </Typography>
          <TextField
            id="standard-basic"
            label="Tender Fee in Rupee"
            variant="standard"
            name="tenderFee"
            value={values.tenderFee}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Fee Payable To"
            variant="standard"
            name="tenderFeePayableTo"
            value={values.tenderFeePayableTo}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Tender Fee Exemption"
            variant="standard"
            name="tenderFeeExemption"
            value={values.tenderFeeExemption}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Fee Payable At"
            variant="standard"
            name="tenderFeePayableAt"
            value={values.tenderFeePayableAt}
            onChange={handleChange}
          />
          <br />
          <Divider />
          <br />
          <Typography variant="body1" component="div">
            EMD Fee Details
          </Typography>
          <TextField
            id="standard-basic"
            label="EMD Fee in Rupee"
            variant="standard"
            name="emdFee"
            value={values.emdFee}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="EMD Percentage"
            variant="standard"
            name="emdPercent"
            value={values.emdPercent}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Fee Payable To"
            variant="standard"
            name="emdFeePayableTo"
            value={values.emdFeePayableTo}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Fee Payable At"
            variant="standard"
            name="emdFeePayableAt"
            value={values.emdFeePayableAt}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="EMD Fee Type"
            variant="standard"
            name="emdFeeType"
            value={values.emdFeeType}
            onChange={handleChange}
          />
          <br />
          <Divider />
          <br />
          <Typography variant="body1" component="div">
            Work Item Details
          </Typography>
          <TextField
            id="standard-basic"
            name="workItemTitle"
            value={values.workItemTitle}
            onChange={handleChange}
            label="Title"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Work Description"
            variant="standard"
            name="workItemDescription"
            value={values.workItemDescription}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Pre-Qualification"
            variant="standard"
            name="workItemPreQualification"
            value={values.workItemPreQualification}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Independent External Monitor/Remarks"
            variant="standard"
            name="workItemRemarks"
            value={values.workItemRemarks}
            onChange={handleChange}
          />
          <br />
          <Divider />
          <br />
          <Typography variant="body1" component="div">
            Critical Dates
          </Typography>
          <TextField
            id="standard-basic"
            name="publishDate"
            value={values.publishDate}
            onChange={handleChange}
            label="Publish Date"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            name="bidOpeningDate"
            value={values.bidOpeningDate}
            onChange={handleChange}
            label="Bid Opening Date"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            name="bidSubmissionStartDate"
            value={values.bidSubmissionStartDate}
            onChange={handleChange}
            label="Bid Submission Start Date"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            name="bidSubmissionEndDate"
            value={values.bidSubmissionEndDate}
            onChange={handleChange}
            label="Bid Submission End Date"
            variant="standard"
          />
          <br />
          <Button variant="contained" onClick={handleSubmit}>
            Publish
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default TenderForm;
