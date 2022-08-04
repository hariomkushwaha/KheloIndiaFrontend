import React from "react";
import { Link, Stack, Text, Button } from "@chakra-ui/react";

export default function Card() {
  return (
    <Stack px="8" py="5" boxShadow="lg" m="12" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold" fontSize={{ base: "xl" }}>
          Title
        </Text>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Text fontSize={{ base: "md" }} textAlign={"left"} maxW={"4xl"}>
          Description : We use cookies and similar technologies to help
          personalise content, tailor and measure ads, and provide a better
          experience. By clicking OK or turning an option on in Cookie
          Preferences, you agree to this, as outlined in our Cookie Policy. To
          change preferences or withdraw consent, please update your Cookie
          Preferences.
        </Text>
        <Stack direction={{ base: "column", md: "row" }}>
          <Link href="Tender/${TenderID}" style={{textDecoration:'none'}}>
            <Button variant="outline" colorScheme="green">
              Submit Proposal
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
