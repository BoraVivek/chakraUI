import Head from 'next/head'
import Image from 'next/image'
import { Container, Flex, VStack } from '@chakra-ui/react'
import Details from '../src/sections/details'
import Cart from '../src/sections/cart'


export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}
