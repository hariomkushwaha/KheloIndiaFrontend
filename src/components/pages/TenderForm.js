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

export default function TenderForm() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6} w="800px">
        <Stack align={"center"}>
          <Heading fontSize={"5xl"}>Post a Tender</Heading>
          <Text fontSize={"2xl"} color={"gray.600"}>
            Khelo India <Link color={"blue.400"}>Site</Link> ✌️
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
              <FormControl id="OrgChain">
                <FormLabel>Organisation Chain</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="RefNumber">
                <FormLabel>Reference Number</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="TenderID">
                <FormLabel>Tender ID</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="ItemTechEval">
                <FormLabel>Itemwise Technical Evaluation Allowed</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="TenderType">
                <FormLabel>Tender Type</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="GenTechEval">
                <FormLabel>Itemwise Technical Evaluation Allowed</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="PaymentMode">
                <FormLabel>Payment Mode Offline</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="TwoStage">
                <FormLabel>Allowed 2-Stage Bidding</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="TenderCategory">
                <FormLabel>Tender Category</FormLabel>
                <Input type="text" />
              </FormControl>
            </Stack>

            <hr />

            <Stack spacing={4}>
              <Text fontSize={"lg"} color={"orange.500"} as="samp">
                Tender Fee Details
              </Text>
              <FormControl id="TenderFee">
                <FormLabel>Tender Fee in Rupee</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl id="TFeePayableTo">
                <FormLabel>Fee Payable To</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="TenderFeeExempt">
                <FormLabel>Tender Fee Exemption</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="TFeePayableAt">
                <FormLabel>Fee Payable At</FormLabel>
                <Input type="text" />
              </FormControl>
            </Stack>

            <hr />

            <Stack spacing={4}>
              <Text fontSize={"lg"} color={"orange.500"} as="samp">
                EMD Fee Details
              </Text>
              <FormControl id="EMDFee">
                <FormLabel>EMD Fee in Rupee</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl id="EMDPercentage">
                <FormLabel>EMD Percentage</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl id="EFeePayableTo">
                <FormLabel>Fee Payable To</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="EFeePayableAt">
                <FormLabel>Fee Payable At</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="EMDFeeType">
                <FormLabel>EMD Fee Type</FormLabel>
                <Input type="text" />
              </FormControl>
            </Stack>

            <hr />

            <Stack spacing={4}>
              <Text fontSize={"lg"} color={"orange.500"} as="samp">
                Work Item Details
              </Text>
              <FormControl id="Title">
                <FormLabel>Title</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="WorkDesc">
                <FormLabel>Work Description</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="PreQual">
                <FormLabel>Pre-Qualification</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="ExRemarks">
                <FormLabel>Independent External Monitor/Remarks</FormLabel>
                <Input type="text" />
              </FormControl>
            </Stack>

            <hr />

            <Stack spacing={4}>
              <Text fontSize={"lg"} color={"orange.500"} as="samp">
                Critical Dates
              </Text>
              <FormControl id="PublishDate">
                <FormLabel>Publish Dates</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl id="BidOpeningDate">
                <FormLabel>Bid Opening Date</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl id="BidSubmissionStart">
                <FormLabel>Bid Submission Start-Date</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl id="BidSubmissionEnd">
                <FormLabel>Bid Submission End-Date</FormLabel>
                <Input type="date" />
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
              <Button
                bg={"orange.400"}
                color={"white"}
                _hover={{
                  bg: "yellow.400",
                }}
                fontSize={"xl"}
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
