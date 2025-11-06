import { SectionTitle } from '../../styles/GlobalStyle';
import { Container } from '../../styles/Container';

import * as S from './styles';

const AboutSection = () => {
  return (
    <S.AboutSection>
      <Container>
        <SectionTitle>Quem Somos</SectionTitle>
        <S.FeatureRow>
          <S.Img
            src="https://img.freepik.com/fotos-premium/silhueta-de-pescadores-usando-ferramentas-de-pesca-e-durante-o-sol-dourado-brilha_29392-278.jpg"
            alt="pescador"
          />
          <S.Text>
            <h3>Pescadores impulsionam turismo em Laguna</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              est, aspernatur dignissimos inventore molestiae fugiat laudantium,
              distinctio eaque tempora aliquam ducimus dicta! Porro dignissimos
              nobis deleniti exercitationem incidunt quod. Vitae.
            </p>
          </S.Text>
        </S.FeatureRow>
        <S.FeatureRow reverse>
          <S.Img
            src="https://www.escolhaviajar.com/wp-content/uploads/2022/06/laguna-farol-de-santa-marta-1.jpg"
            alt="pescador"
          />
          <S.Text>
            <h3>TESTE </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              est, aspernatur dignissimos inventore molestiae fugiat laudantium,
              distinctio eaque tempora aliquam ducimus dicta! Porro dignissimos
              nobis deleniti exercitationem incidunt quod. Vitae.
            </p>
          </S.Text>
        </S.FeatureRow>
      </Container>
    </S.AboutSection>
  );
};

export default AboutSection;
