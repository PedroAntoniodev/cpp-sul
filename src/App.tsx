import { useEffect, useState } from 'react';

import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 88);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header scrolled={scrolled} />
      <Carousel />
    </>
  );
}

export default App;
