import React, { useState } from "react";
import {
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Divider,
  IconButton,
  Stack,
  HStack,
  VStack,
  Box,
  StackDivider,
  Flex,
  Spacer,
  Heading,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

import Logout from "./Logout";
import Login from "./Login";

const AdminNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);

  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        h="80px"
        mx="40px"
      >
        <Box p="1" pr="5">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              onClick={onOpen}
            />
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                  Navigation Menu
                </DrawerHeader>
                <DrawerBody>
                  <Link href="#">Home</Link>
                  <Divider />
                  <Stack spacing={3}>
                    <Link href="#">List View</Link>
                    <Link href="#">Comparison</Link>
                    <Link href="#">Analytics</Link>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Menu>
        </Box>
        <Box p="1">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          {login ? (
            <>
              <Link
                href="post-tender/${TenderID}"
                style={{ textDecoration: "none" }}
              >
                <Button colorScheme="teal">Post a Tender</Button>
              </Link>
              <Button colorScheme="teal">Add Employee</Button>
              <Button colorScheme="teal" onClick={() => setLogin(!login)}>
                Logout
              </Button>
            </>
          ) : (
            <Button colorScheme="teal" onClick={() => setLogin(!login)}>
              Log in
            </Button>
          )}
        </ButtonGroup>
      </Flex>
      {login ? <Login /> : <Logout />}
    </>
  );
};

export default AdminNavbar;
