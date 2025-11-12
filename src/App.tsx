import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';

import Rotas from './routes';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
