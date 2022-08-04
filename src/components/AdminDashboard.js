import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import {
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
} from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
  } from '@chakra-ui/react';

const AdminDashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" h="80px" mx="10px">
      <Box p="1">
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
              <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
              <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
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
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default AdminDashboard;
