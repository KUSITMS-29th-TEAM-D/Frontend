import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { Router } from '@/routers/router';
import { GlobalStyle, theme } from '@/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  </HelmetProvider>
);
