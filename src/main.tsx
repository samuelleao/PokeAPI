import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from '@/pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/ChakraTheme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/Routers'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
