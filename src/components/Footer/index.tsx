import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSpotify,
} from 'react-icons/fa6';

import * as S from './styles';
import { Container } from '../../styles/Container';
import ImgLogoFooter from '../../assets/images/logo_cpp_footer.png';

const Footer = () => {
  return (
    <S.Footer>
      <Container style={{ textAlign: 'left' }}>
        <S.LogoFooter src={ImgLogoFooter} alt="logo CPP" />
        <S.Linha />
        <S.ListContainer>
          <S.ListFooter>
            <S.ListItem>
              <a href="#">Projetos</a>
            </S.ListItem>
            <S.ListItem>
              <a href="#">CPP Nacional</a>
            </S.ListItem>
            <S.ListItem>
              <a href="#">CPP Nacional</a>
            </S.ListItem>
            <S.ListItem>
              <a href="#">CPP Nacional</a>
            </S.ListItem>
            <S.ListItem>
              <a href="#">CPP Nacional</a>
            </S.ListItem>
          </S.ListFooter>
          <S.ListFooter>
            <S.ListItem>
              <a href="#">Projetos</a>
            </S.ListItem>
            <S.ListItem>
              <a href="#">CPP Nacional</a>
            </S.ListItem>
            <S.ListItem>
              <a href="#">CPP Nacional TESTE</a>
            </S.ListItem>
            <S.ListItem>
              <a href="#">CPP Nacional TESTE</a>
            </S.ListItem>
            <S.ListItem>
              <a href="#">CPP Nacional TEST</a>
            </S.ListItem>
          </S.ListFooter>
          <S.SocialLinks>
            <h4>Siga-nos nas redes sociais</h4>
            <S.SocialIcons>
              <a
                href="#"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                title="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="#"
                title="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                title="Spotify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSpotify />
              </a>
            </S.SocialIcons>
          </S.SocialLinks>
        </S.ListContainer>
        <S.Copyright>
          CPP SUL - CNPJ 00.000.000/0001-94 - é uma Associação civil sem fins
          lucrativos que goza de isenção com relação aos tributos federais
          devidos sobre suas receitas próprias. A menos que especificado o
          contrário, os textos neste site estão licenciados sob uma licença
          CC-BY International
        </S.Copyright>
        <S.Copyright>© Site desenvolvido por Pedro Antônio - 2025</S.Copyright>
      </Container>
    </S.Footer>
  );
};

export default Footer;
