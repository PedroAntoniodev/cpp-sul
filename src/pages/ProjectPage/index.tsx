import { useParams } from 'react-router';

import { projects } from '../../data/projects';

import Header from '../../components/Header';
import { Container } from '../../styles/Container';

import * as S from './styles';

const ProjectTemplate = () => {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <>
      <Header scrolled={true} />
      <Container>
        <S.Section>
          <S.Title>{project.title}</S.Title>
          <S.Image src={project.image} alt={project.title} />
          <S.Description>{project.description}</S.Description>
        </S.Section>
      </Container>
    </>
  );
};

export default ProjectTemplate;
