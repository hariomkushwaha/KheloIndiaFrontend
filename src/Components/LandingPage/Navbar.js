// import React from "react";
// import { Center , Container, Grid, GridItem } from "@chakra-ui/react";
// import "../Style/GettingStarted.css";

// const GettingStarted = () => {
//   return (
//     <Grid
//       templateAreas={`"header header"
//                     "nav nav"
//                     "main main"
//                     "footer footer"
//                     `}
//       gridTemplateRows={"100px 45px 400px 218px"}
//       h="200px"
//       paddingLeft="0%"
//       gap="1"
//       fontWeight="bold"
//     >
//       <GridItem area={"header"}>
//         <Grid templateColumns="repeat(5, 1fr)" gap={4}>
//           <GridItem colSpan={2} h="12">
//             <img src="HTTPS://kheloindia.gov.in/public/dist/img/logo.jpg"></img>
//           </GridItem>
//           <GridItem colStart={5} colEnd={6} h="12">
//             <img src="HTTPS://kheloindia.gov.in/public/dist/img/youth-affairs-and-sport-logo.png" />
//           </GridItem>
//         </Grid>
//       </GridItem>
//       <GridItem w="100vw" bg="green" area={"nav"}>
//         <ul>
//           <li>
//             <a class="active" href="#home">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#tenders">Tenders</a>
//           </li>
//           <li>
//             <a href="#notifications">Notifications</a>
//           </li>
//           <li>
//             <a href="#profile">Profile</a>
//           </li>
//         </ul>
//       </GridItem>
//       <GridItem area={"main"}>
//         <div>
//         <div className="about">
//            <h1>About Khelo India</h1>
//            <h2>National programme for development of sports</h2>
//            <p>The importance of sports and fitness in one’s life is invaluable. Playing sports inculcates team spirit and develops strategic thinking, analytical thinking, leadership skills, goal setting and risk taking. A fit and healthy individual leads to an equally healthy society and strong nation.</p><p> Sports is an extremely important component for the overall development of our nation... </p>
//         </div>
//         </div>
//       </GridItem>
//       <GridItem bg="grey" area={"footer"}>

//         <Grid templateColumns="repeat(5, 1fr)" gap={4}>
//           <GridItem colStart={1} colEnd={2}>
//           <a href="https://www.facebook.com/OfficialKheloIndia/" target="_blank"><img src="HTTPS://kheloindia.gov.in/public/dist/img/facebook.png" /></a>
//           </GridItem>
//           <GridItem colStart={2} colEnd={3}>
//           <a href="https://twitter.com/kheloindia" target="_blank"><img src="HTTPS://kheloindia.gov.in/public/dist/img/twitter.png" /></a>
//           </GridItem>
//           <GridItem colStart={3} colEnd={4}>
//           <a href="https://www.instagram.com/officialkheloindia/" target="_blank"><img src="HTTPS://kheloindia.gov.in/public/dist/img/instagram.png" /></a>
//           </GridItem>
//           <GridItem colStart={4} colEnd={5}>
//           <a href="https://www.youtube.com/channel/UCv_R1MJycEf4_-qLK_S-RPQ" target="_blank"><img src="HTTPS://kheloindia.gov.in/public/dist/img/youtubeIcon.png" /></a>
//           </GridItem>
//           <GridItem colStart={5} colEnd={6}>
//           <a href="HTTPS://kheloindia.gov.in"><img src="HTTPS://kheloindia.gov.in/public/dist/img/logo.jpg" /></a> 
//           </GridItem>
//         </Grid>

//       </GridItem>
//     </Grid>
//   );
// };

// export default GettingStarted;
import { ReactNode } from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Tender', 'Notification','Profile'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}