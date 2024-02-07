import React from 'react';
import Navigation from './navigation';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './hooks/useQueryClient';


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
