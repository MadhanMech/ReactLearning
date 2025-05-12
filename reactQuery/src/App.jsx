import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Test from './Test'
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Test/>
      
    </QueryClientProvider>
  )
}

export default App
