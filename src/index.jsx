import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/queryClient';
import App from './App';
import './App.css'; // Ensure CSS is imported for Tailwind

const root = createRoot(document.getElementById('mainDivPortfolio'));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
// Removed serviceWorker.unregister() as it is legacy