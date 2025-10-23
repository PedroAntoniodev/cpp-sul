import styled from 'styled-components';

interface Props {
  scrolled: boolean;
}

export const HeaderContainer = styled.header<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${(props) => (props.scrolled ? '#000' : 'transparent')};
  box-shadow: ${(props) =>
    props.scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
`;

export const Logo = styled.img`
  height: 80px;
  cursor: pointer;
  margin: 16px;
`;

export const Nav = styled.nav`
  a {
    color: #16afdb;
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
