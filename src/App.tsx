import React from 'react';
import Navigation from './navigation';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
