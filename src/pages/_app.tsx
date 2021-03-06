import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SidebarContextProvider } from '../contexts/useSidebar'
import { makeServer } from '../services/mirage'
import { theme } from '../styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarContextProvider>
          <Component {...pageProps} />
        </SidebarContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
