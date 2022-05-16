import Head from 'next/head'
import Image from 'next/image'
import { Container, Flex, VStack } from '@chakra-ui/react'
import Details from '../src/sections/details'
import Cart from '../src/sections/cart'


export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Breakpoint of height, y axis padding, and direction */}
      <Flex h={{base:'auto', md:'100vh'}} py={[0, 10, 20]} direction={{base: 'column-reverse', md:'row'}}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}
