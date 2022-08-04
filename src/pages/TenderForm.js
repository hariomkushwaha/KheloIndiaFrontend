import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  // Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export default function TenderForm() {
  const initialValues = {
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
  };

  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let flag = false;
    let tempValues = Object.values(values);

    for (const v of tempValues) {
      if (v.length === 0) {
        flag = true;
      }
    }

    if (flag) {
      setError(true);
      console.log("Please enter all the values");
    } else {
      setError(false);
      console.log("Submitted");
      localStorage.setItem("tender", JSON.stringify(values));
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6} w="800px">
        <Stack align={"center"}>
          <Heading fontSize={"5xl"}>Post a Tender</Heading>
          <Text fontSize={"2xl"} color={"gray.600"}>
            Khelo India <Link color={"blue.400"} href="/GetStarted">Site</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={10}>
            <Stack spacing={4}>
              <Text fontSize={"lg"} color={"orange.500"} as="samp">
                Basic Details
              </Text>
              <FormControl id="OrgChain" isRequired>
                <FormLabel>Organization Chain</FormLabel>
                <Input
                  type="text"
                  name="orgChain"
                  value={values.orgChain}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="RefNumber" isRequired>
                <FormLabel>Reference Number</FormLabel>
                <Input
                  type="text"
                  name="refNumber"
                  value={values.refNumber}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="TenderID" isRequired>
                <FormLabel>Tender ID</FormLabel>
                <Input
                  type="text"
                  name="tenderId"
                  value={values.tenderId}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="ItemTechEval" isRequired>
                <FormLabel>Itemwise Technical Evaluation Allowed</FormLabel>
                <Input
                  type="text"
                  name="itemwiseTechnicalEvaluation"
                  value={values.itemwiseTechnicalEvaluation}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="TenderType" isRequired>
                <FormLabel>Tender Type</FormLabel>
                <Input
                  type="text"
                  name="tenderType"
                  value={values.tenderType}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="GenTechEval" isRequired>
                <FormLabel>General Technical Evaluation Allowed</FormLabel>
                <Input
                  type="text"
                  name="generalTechnicalEvaluation"
                  value={values.generalTechnicalEvaluation}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="PaymentMode" isRequired>
                <FormLabel>Payment Mode Offline</FormLabel>
                <Input
                  type="text"
                  name="paymentMode"
                  value={values.paymentMode}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="TwoStage" isRequired>
                <FormLabel>Allowed 2-Stage Bidding</FormLabel>
                <Input
                  type="text"
                  name="twoStageBinding"
                  value={values.twoStageBinding}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="TenderCategory" isRequired>
                <FormLabel>Tender Category</FormLabel>
                <Input
                  type="text"
                  name="tenderCategory"
                  value={values.tenderCategory}
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>

            <hr />

            <Stack spacing={4}>
              <Text fontSize={"lg"} color={"orange.500"} as="samp">
                Tender Fee Details
              </Text>
              <FormControl id="TenderFee" isRequired>
                <FormLabel>Tender Fee in Rupee</FormLabel>
                <Input
                  type="number"
                  name="tenderFee"
                  value={values.tenderFee}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="TFeePayableTo" isRequired>
                <FormLabel>Fee Payable To</FormLabel>
                <Input
                  type="text"
                  name="tenderFeePayableTo"
                  value={values.tenderFeePayableTo}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="TenderFeeExempt" isRequired>
                <FormLabel>Tender Fee Exemption</FormLabel>
                <Input
                  type="text"
                  name="tenderFeeExemption"
                  value={values.tenderFeeExemption}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="TFeePayableAt" isRequired>
                <FormLabel>Fee Payable At</FormLabel>
                <Input
                  type="text"
                  name="tenderFeePayableAt"
                  value={values.tenderFeePayableAt}
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>

            <hr />

            <Stack spacing={4}>
              <Text fontSize={"lg"} color={"orange.500"} as="samp">
                EMD Fee Details
              </Text>
              <FormControl id="EMDFee" isRequired>
                <FormLabel>EMD Fee in Rupee</FormLabel>
                <Input
                  type="number"
                  name="emdFee"
                  value={values.emdFee}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="EMDPercentage" isRequired>
                <FormLabel>EMD Percentage</FormLabel>
                <Input
                  type="number"
                  name="emdPercent"
                  value={values.emdPercent}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="EFeePayableTo" isRequired>
                <FormLabel>Fee Payable To</FormLabel>
                <Input
                  type="text"
                  name="emdFeePayableTo"
                  value={values.emdFeePayableTo}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="EFeePayableAt" isRequired>
                <FormLabel>Fee Payable At</FormLabel>
                <Input
                  type="text"
                  name="emdFeePayableAt"
                  value={values.emdFeePayableAt}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="EMDFeeType" isRequired>
                <FormLabel>EMD Fee Type</FormLabel>
                <Input
                  type="text"
                  name="emdFeeType"
                  value={values.emdFeeType}
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>

            <hr />

            <Stack spacing={4}>
              <Text fontSize={"lg"} color={"orange.500"} as="samp">
                Work Item Details
              </Text>
              <FormControl id="Title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="workItemTitle"
                  value={values.workItemTitle}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="WorkDesc" isRequired>
                <FormLabel>Work Description</FormLabel>
                <Input
                  type="text"
                  name="workItemDescription"
                  value={values.workItemDescription}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="PreQual" isRequired>
                <FormLabel>Pre-Qualification</FormLabel>
                <Input
                  type="text"
                  name="workItemPreQualification"
                  value={values.workItemPreQualification}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="ExRemarks" isRequired>
                <FormLabel>Independent External Monitor/Remarks</FormLabel>
                <Input
                  type="text"
                  name="workItemRemarks"
                  value={values.workItemRemarks}
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>

            <hr />

            <Stack spacing={4}>
              <Text fontSize={"lg"} color={"orange.500"} as="samp">
                Critical Dates
              </Text>
              <FormControl id="PublishDate" isRequired>
                <FormLabel>Publish Dates</FormLabel>
                <Input
                  type="date"
                  name="publishDate"
                  value={values.publishDate}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="BidOpeningDate" isRequired>
                <FormLabel>Bid Opening Date</FormLabel>
                <Input
                  type="date"
                  name="bidOpeningDate"
                  value={values.bidOpeningDate}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="BidSubmissionStart" isRequired>
                <FormLabel>Bid Submission Start-Date</FormLabel>
                <Input
                  type="date"
                  name="bidSubmissionStartDate"
                  value={values.bidSubmissionStartDate}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="BidSubmissionEnd" isRequired>
                <FormLabel>Bid Submission End-Date</FormLabel>
                <Input
                  type="date"
                  name="bidSubmissionEndDate"
                  value={values.bidSubmissionEndDate}
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>

            <Stack spacing={4}>
              {/* <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>

                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack> */}
              <Text fontSize={"md"} color={"red.500"} as="samp">
                <sup>*</sup> All Fields are Required
              </Text>
              <Text fontSize={"md"} color={"red.500"} as="samp">
                {error ? (
                  <>
                    <sup>*</sup> Fill all the Fields
                  </>
                ) : (
                  ""
                )}
              </Text>
              <Button
                bg={"orange.400"}
                color={"white"}
                _hover={{
                  bg: "yellow.400",
                }}
                fontSize={"xl"}
                onClick={handleSubmit}
              >
                Publish
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
