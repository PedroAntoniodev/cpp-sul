import { useEffect, useState } from 'react';
import AboutSection from '../../components/About_Section';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import ProjectsSection from '../../components/Projects_Section';

const HomePage = () => {
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
      <h1 className="sr-only">
        Conselho Pastoral dos pescadores e pescadoras SUL
      </h1>
      <Header scrolled={scrolled} />
      <Carousel />
      <AboutSection />
      <ProjectsSection />
    </>
  );
};

export default HomePage;
