import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Test from './Test'
import HighOrderComponent from './highordercomponent';
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Test/> */}
      <HighOrderComponent/>
    </QueryClientProvider>
  )
}

export default App
