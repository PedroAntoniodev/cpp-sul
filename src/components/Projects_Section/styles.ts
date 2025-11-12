import styled from 'styled-components';
import { Colors } from '../../styles/GlobalStyle';
import { Link } from 'react-router';

export const ProjectsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: 24px;
  padding: 32px 0;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: ${Colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    margin-bottom: 16px;
    color: ${Colors.blue2};
  }

  p {
    text-align: left;
    padding: 0 16px;
    font-size: 16px;
    color: ${Colors.black};

    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 16px;
`;

export const CardButton = styled(Link)`
  display: block;
  margin: 16px auto;
  padding: 8px 16px;
  background-color: ${Colors.blue};
  color: ${Colors.white};
  text-decoration: none;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${Colors.blue2};
  }
`;
