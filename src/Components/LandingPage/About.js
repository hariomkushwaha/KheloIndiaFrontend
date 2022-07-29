import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function About() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"6xl"}>About Khelo India</Heading>
        <Heading fontSize={"3xl"}>National programme for development of sports</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          <p>
            The importance of sports and fitness in one’s life is invaluable.
            Playing sports inculcates team spirit and develops strategic
            thinking, analytical thinking, leadership skills, goal setting and
            risk taking. A fit and healthy individual leads to an equally
            healthy society and strong nation.
          </p>
          <p>
            Sports is an extremely important component for the overall
            development of our nation...
          </p>
        </Text>
      </Stack>
    </Box>
  );
}
