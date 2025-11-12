import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 32px 0;
`;

export const FeatureRow = styled.div<{ reverse?: boolean }>`
  display: flex;
  max-width: 1024px;
  gap: 32px;
  allign-items: center;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  padding-bottom: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 50%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Text = styled.div`
  flex: 1;

  h3 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  p {
    font-size: 24px;
    margin-top: 16px;
  }
`;
