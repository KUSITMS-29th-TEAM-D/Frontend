import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { Router } from '@/router';
import { GlobalFont, GlobalStyle, theme } from '@/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalFont />
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </RecoilRoot>
);
