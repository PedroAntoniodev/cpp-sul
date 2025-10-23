import * as S from './styles';

import ImgLogo from '../../assets/images/logo_cpp.png';

type Props = {
  scrolled: boolean;
};

export function Header({ scrolled }: Props) {
  return (
    <S.HeaderContainer scrolled={scrolled}>
      <S.Logo src={ImgLogo} alt="logo CPP"></S.Logo>
      <S.Nav>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </S.Nav>
    </S.HeaderContainer>
  );
}
