import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('mainDivPortfolio'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
serviceWorker.unregister();