import * as S from './styles';

import ImgLogo from '../../assets/images/logo_cpp.png';
import { Container } from '../../styles/Container';

type Props = {
  scrolled: boolean;
};

export function Header({ scrolled }: Props) {
  return (
    <S.HeaderContainer scrolled={scrolled}>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <S.Logo src={ImgLogo} alt="logo CPP" scrolled={scrolled}></S.Logo>
        <S.Nav>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </S.Nav>
      </Container>
    </S.HeaderContainer>
  );
}
