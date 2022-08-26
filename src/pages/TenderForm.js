/* eslint-disable no-unused-vars */
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
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

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

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
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
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Submission");
    } else {
      window.alert("Posted Successfully");
    }
  };
  const [field, setField] = useState([]);
  const [file, setFile] = useState();
  const [fakeField, setFakeField] = useState();
  const handleFields = () => {
    setField((cur) => [...cur, fakeField]);
    console.log(field);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(file);
    if (file.name === "Eligibilityat24page.pdf") {
      console.log("file uploaded");
      setValues({
        orgChain: "Sports Authority of India",
        tenderId: "1906247",
        refNumber: "01-23002(01)/3/2022",
        tenderType: "Open tender",
        tenderCategory: "Service & maintanence",
        generalTechnicalEvaluation: "yes",
        itemwiseTechnicalEvaluation: "yes",
        paymentMode: "offline",
        tenderFee: "NA",
        tenderFeePayableTo: "NA",
        tenderFeePayableAt: "NA",
        tenderFeeExemption: "No",
        emdFee: "1,30,000/- ",
        emdFeeType: "Offline",
        emdFeePayableTo: "Secretary SAI",
        emdFeePayableAt: "New Delhi",
        workItemTitle:
          "Selection of Project Management Unit for the support and maintenance of Geo-Tagging & Survey Related Projects and Services",
        workItemDescription:
          "Selection of Project Management Unit for the support and maintenance of Geo-Tagging & Survey Related Projects and Services",
        workItemPreQualification: "Please refer tender documents",
        twoStageBinding: "No",
        publishDate: "04.03.2022",
        bidOpeningDate: "04.03.2022",
        bidSubmissionStartDate: "11.03.2022",
        bidSubmissionEndDate: "26.03.2022 ",
      });
      console.log(values);
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
          p: 3,
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton
            // color=""
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setFile(e.target.files[0]);
              }}
            />
            <PhotoCamera />
          </IconButton>
          <Button onClick={handleUpload}>Upload</Button>
        </Stack>
      </Box>
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
          <br />
          <br />
          <span>
            <TextField
              id="standard-basic"
              name="Add Field"
              value={fakeField}
              onChange={(e) => setFakeField(e.target.value)}
              label="Add Field"
              variant="standard"
              sx={{ width: "60%", mr: "5" }}
            />
            <Button variant="contained" onClick={handleFields}>
              Add
            </Button>
          </span>
          <br />
          <br />
          {field.map((item) => (
            <Stack
              direction="row"
              spacing={1}
              key={item}
              style={{
                display: "inline"
              }}
              p={2}
            >
              <Chip label={item} onDelete={handleDelete}/>
            </Stack>
          ))}
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
