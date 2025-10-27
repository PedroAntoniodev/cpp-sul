import styled from 'styled-components';
import { Colors } from '../../styles/GlobalStyle';

interface Props {
  scrolled: boolean;
}

export const HeaderContainer = styled.header<Props>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${(props) =>
    props.scrolled ? Colors.white : 'transparent'};
  box-shadow: ${(props) =>
    props.scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
`;

export const Logo = styled.img<Props>`
  height: ${(props) => (props.scrolled ? '80px' : '60px')};
  cursor: pointer;
  margin: 16px;
  transition: height 0.3s ease-in-out;
`;

export const Nav = styled.nav`
  a {
    color: ${Colors.blue};
    text-decoration: none;
    margin: 16px;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    font-size: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
