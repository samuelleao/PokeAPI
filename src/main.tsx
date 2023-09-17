import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from '@/pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/ChakraTheme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  </React.StrictMode>,
)
