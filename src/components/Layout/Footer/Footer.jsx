import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiCode,
  TiSocialLinkedin,
} from 'react-icons/ti';
import { DiGithubBadge } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@Ayush Hedau"
            color={'yellow.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://www.linkedin.com/in/ayush-hedau-81499a201" target={'blank'}>
            <TiSocialLinkedin />
          </a>
          <a href="https://github.com/ayushedau" target={'blank'}>
            <DiGithubBadge />
          </a>
          <a href="https://leetcode.com/Ayushedau" target={'blank'}>
            <TiCode />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
