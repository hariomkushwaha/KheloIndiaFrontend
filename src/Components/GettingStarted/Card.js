import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';

export default function Card() {
  return (
    <Stack p="4" boxShadow="lg" m="12" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Title</Text>
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          Description : We use cookies and similar technologies to help personalise content,
          tailor and measure ads, and provide a better experience. By clicking
          OK or turning an option on in Cookie Preferences, you agree to this,
          as outlined in our Cookie Policy. To change preferences or withdraw
          consent, please update your Cookie Preferences.
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button variant="outline" colorScheme="green">
            Submit Proposal
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}