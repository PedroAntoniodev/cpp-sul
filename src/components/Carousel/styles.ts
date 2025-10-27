import styled from 'styled-components';

export const CarouselOuter = styled.div`
  background: #eef5f2;
  width: 100%;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  box-shadow: 0 5px 32px -5px #046c3c20;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.65) 55%, rgba(0, 0, 0, 0));
  width: 100%;
  height: 100%;
  padding: 34px 38px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0 0 10px 0;
    letter-spacing: 2px;
  }
  p {
    font-size: 1.2rem;
    margin: 0;
    max-width: 400px;
  }
`;
