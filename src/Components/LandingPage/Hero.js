// import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <>
      {/* <Head> */}
         <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
         /> 
      {/* </Head> */}

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={500}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
           Welcome To Khelo India<br />
            {/* <Text as={'span'} color={'green.400'}>
              
            </Text> */}
          </Heading>
          <Text color={'gray.500'}>
          The importance of sports and fitness in one’s life is invaluable.
            Playing sports inculcates team spirit and develops strategic
            thinking, analytical thinking, leadership skills, goal setting and
            risk taking. A fit and healthy individual leads to an equally
            healthy society and strong nation.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}