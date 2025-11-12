import { projects } from '../../data/projects';

import { Container } from '../../styles/Container';
import { SectionTitle } from '../../styles/GlobalStyle';

import * as S from './styles';

const ProjectsSection = () => {
  return (
    <Container>
      <SectionTitle>Conheça nossos ultimos projetos</SectionTitle>
      <S.ProjectsSection>
        {projects.map((project) => (
          <S.Card key={project.id}>
            <S.CardImage src={project.primaryImage} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.resumedDescription}</p>
            <S.CardButton to={`/projetos/${project.id}`}>
              Saiba mais
            </S.CardButton>
          </S.Card>
        ))}
      </S.ProjectsSection>
    </Container>
  );
};

export default ProjectsSection;
