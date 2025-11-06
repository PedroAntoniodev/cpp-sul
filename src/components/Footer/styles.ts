import styled from 'styled-components';
import { Colors } from '../../styles/GlobalStyle';

export const Footer = styled.footer`
  padding: 32px 0;
  background-color: ${Colors.blue2};
  a {
    color: ${Colors.white};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;

    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${Colors.blue};
    }
  }
  h4 {
    font-size: 18px;
    color: ${Colors.white};
  }
`;

export const LogoFooter = styled.img`
  height: 80px;
  cursor: pointer;
`;

export const Linha = styled.hr`
  border: none;
  border-top: 1px solid ${Colors.white};
  width: 100%;
  margin: 16px 0;
  opacity: 0.9;
`;

export const ListFooter = styled.ul`
  display: block;
  gap: 32px;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  a {
    color: ${Colors.white};
    font-size: 32px;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${Colors.blue};
    }
  }
`;

export const ListItem = styled.li`
  margin-bottom: 16px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
`;

export const Copyright = styled.p`
  text-align: center;
  color: ${Colors.white};
  font-size: 14px;
  margin-bottom: 16px;
`;
