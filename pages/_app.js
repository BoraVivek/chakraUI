import { ChakraProvider } from '@chakra-ui/react'

// Import the extended theme
import theme from '../src/theme'

// Import the imported Fonts
import "../src/theme/style.css";

function MyApp({ Component, pageProps }) {
  return (
    // Passing our own custom theme to Chakra Provider
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp