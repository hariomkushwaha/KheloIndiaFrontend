import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="gray.100" px={8} my={3}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={12}
              display={{ base: "none", md: "flex" }}
            >
              <Link px={4} href="/">Home</Link>
              <Link px={4} href="/GetStarted">Tender</Link>
              <Link px={4} href="">Notifications</Link>
              <Link px={4} href="">Profile</Link>
              <Link px={4} href="/Dashboard">Proponent Dashboard</Link>
            </HStack>
            <Link href="/Admin" style={{ position: 'absolute', right: '100px', textDecoration:'none'}}>
              <Button variant="outline" colorScheme="red">Employee</Button>
            </Link>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="/">Home</Link>
              <Link href="/GetStarted">Tender</Link>
              <Link href="">Notifications</Link>
              <Link href="">Profile</Link>
              <Link href="/Dashboard">Proponent Dashboard</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
