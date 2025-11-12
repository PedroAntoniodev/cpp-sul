import styled from 'styled-components';
import { Colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
  margin-top: 80px;
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 64px;
  padding: 64px 0;
  color: ${Colors.blue2};
`;

export const Image = styled.img`
  height: 600px;
  border-radius: 16px;
  margin-bottom: 32px;
`;

export const Description = styled.p`
  color: ${Colors.black};
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 32px;
`;

export const ImageTextSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 32px 16px;

  img {
    width: 50%;
    object-fit: cover;
    height: 400px;
    border-radius: 12px;
  }
`;
