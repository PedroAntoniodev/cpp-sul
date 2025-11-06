import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ProjectTemplate from './pages/ProjectPage';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projetos/:id" element={<ProjectTemplate />} />
  </Routes>
);

export default Rotas;
