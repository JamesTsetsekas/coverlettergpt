import { VStack, HStack, Text, Link, Divider } from '@chakra-ui/react';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { Link as WaspLink } from 'wasp/client/router';

export function Footer() {
  return (
    <VStack width='full' py={5} textAlign='center' gap={4}>
      <Divider />
      <VStack gap={3}>
        <Link href='https://github.com/JamesTsetsekas/aijobbot' color='purple.300' target='_blank'>
          <HStack justify='center'>
            <FaGithub />
            <Text fontSize='sm' color='purple.300'>
              Built with Wasp & 100% Open-Source
            </Text>
          </HStack>
        </Link>

        <Link href='https://twitter.com/JamesTsetsekas' target='_blank' color='purple.300'>
          <HStack justify='center'>
            <FaTwitter />
            <Text fontSize='sm' color='purple.300'>
              Contact Us
            </Text>
          </HStack>
        </Link>
        <WaspLink to='/tos' hash='terms'>
          <Text fontSize='sm' color='purple.300'>
            Terms of Service
          </Text>
        </WaspLink>
        <WaspLink to='/tos' hash='pp'>
          <Text fontSize='sm' color='purple.300'>
            Privacy Policy
          </Text>
        </WaspLink>
      </VStack>
    </VStack>
  );
}
