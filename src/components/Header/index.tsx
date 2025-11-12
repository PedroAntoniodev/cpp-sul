import * as S from './styles';

import ImgLogo from '../../assets/images/logo_cpp_footer.png';
import { Container } from '../../styles/Container';
import { Link } from 'react-router';

type Props = {
  scrolled: boolean;
};

const Header = ({ scrolled }: Props) => {
  return (
    <S.HeaderContainer scrolled={scrolled}>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/">
          <S.Logo src={ImgLogo} alt="logo CPP" scrolled={scrolled}></S.Logo>
        </Link>
        <S.Nav>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </S.Nav>
      </Container>
    </S.HeaderContainer>
  );
};

export default Header;
